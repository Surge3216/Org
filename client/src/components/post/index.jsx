import "./post.css";
import React, { useContext, useEffect, useState  } from 'react';
import { MoreVert } from "@material-ui/icons";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
 
import { UserContext } from '../../context/auth';
import axios from "axios";

export default function Post() {
  const { user } = useContext(UserContext)

  const [timelineData, setTimelineData] = useState([])

  const url = `http://localhost:8080/api/posts/timeline/${user.userId}`
  
  useEffect(()=>{
    axios.get(url)
  .then(function(response){
    setTimelineData(response.data)
    console.log("Car")
  }).catch(err => {
    console.log(err);
}, [ url ])
  })

  const timeline = timelineData.map((post)=>(
    <div className="post" key={post._id} >
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {post.username}
            </span>
            <span className="postDate">{post.createdAt}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div><ThumbUpAltIcon/> like </div>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
    {timeline}
    </div>
   
  );
}