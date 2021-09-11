import "./post.css";
import React, { useContext, useEffect, useState  } from 'react';
import moment from 'moment';
import Comments from "./comments";
import Video from './video'
import { UserContext } from '../../context/auth';
import axios from "axios";
import PostComment from "../postComment";


export default function Post() {
  const { user } = useContext(UserContext)

  const [timelineData, setTimelineData] = useState([])

  const url = `http://localhost:8080/api/posts/timeline/${user.userId}`
  
  useEffect(()=>{
    axios.get(url)
  .then(function(response){
    setTimelineData(response.data)
  }).catch(err => {
    console.log(err);
})
  }, [ url ])

  const timeline = timelineData.map((post)=>(
    <div className="mt-2" key={post._id} >
    <div className="card">
  <div className="card-content">
    <div className="media">
    <div className="media-left">
        <figure className="image is-48x48">
          <img src={post.userImg} alt={post.username}/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{post.username}</p>
        
      </div>
    </div>

    <div className="content">
      {post.desc}
      <br/>
      <br/>
      <time dateTime={moment(post.createdAt).format("MMM Do YY")} >{moment(post.createdAt).format("MMM Do YY")} - {moment(post.createdAt).fromNow(true)} ago</time>
      
    </div>
    {post.video.length !== 0 && <Video url= { post.video }/>}
  </div> 
</div>

    { post.comments.length !== 0 && <Comments id= {post._id }/>}
    
    
    <PostComment postId={post._id} />
</div>
  ))

  return (
<div>
    {timeline}
    </div>
);
}