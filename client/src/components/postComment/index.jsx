import React, { useContext } from 'react';
import { UserContext } from '../../context/auth';
import { useForm } from '../../util/hooks';
import axios from 'axios';

export default function PostComment(props) {
    const { onChange, onSubmit, values } = useForm(newCommentCallback, {
        body: '',
      });

      console.log(props)
    
      const { user } = useContext(UserContext)
      console.log(user.img)
    
      function newComment(){
        const userComment = {
          username: user.username,
          body: values.body,
          userImage: user.img
        }
        axios.post(`http://localhost:8080/api/posts/${props.postId}/comment`, userComment)
        .then(function(response){
          console.log(response)
        })
       
      }

      function newCommentCallback(){
          newComment()
      }

    return (
        <div>
            <article className="media pr-5 pb-5 mt-2">
  <figure className="media-left ">
    <p className="image is-64x64">
      <img src={user.img} alt={user.username} />
    </p>
  </figure> 
  <div className="media-content ">
    <div className="field">
      <p className="control ">
        <textarea className="textarea has-fixed-size" rows ='1' placeholder="Add a comment..."
        name="body"
        value={values.body}
        onChange={onChange}></textarea>
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button" onClick={onSubmit}>Post comment</button>
      </p>
    </div>
  </div>
</article>
        </div>
    )
}
