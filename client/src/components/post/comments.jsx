import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function Comments(props) {
    const [ comments, setComments ] = useState([])

    useEffect(()=>{
        const url = `/api/posts/${props.id}/comments`
        axios.get(url)
        .then(function(response){
            setComments(response.data)
        })
    },[props.id])


    const allComments = comments.map((comment)=>(
        <div className="comment" key={comment._id} >
    <article className="media p-2 pl-4">
      <figure className="media-left">
        <p className="image is-48x48">
          <img src={comment.userImage} alt="placeholder"/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{comment.username}</strong>
            <br/>
            {comment.body}
            <br/>
            <small>{moment(comment.createdAt).fromNow(true)}</small>
          </p>
        </div>
      </div>
    </article>
    </div>
    ))

    return (
        <div>
            <div className="topComment">
            {allComments}
           
    </div>
        </div>
    )
}
