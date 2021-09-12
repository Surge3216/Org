import "./share.css";
import React, { useContext } from 'react';
import { UserContext } from '../../context/auth';
import { useForm } from '../../util/hooks';
import axios from 'axios';

export default function Share() {

  const { onChange, onSubmit, values } = useForm(newPostCallback, {
    desc: '',
  });


  
  

  const { user } = useContext(UserContext)
  console.log(user.img)

  function newPost(){
    const userPost = {
      userId: user.userId,
      username: user.username,
      desc: values.desc,
      userImg: user.img
    }

    axios.post('/api/posts/', userPost)
    .then(function(response){
      console.log(response)
    })
    window.location.reload(false)
  }

  function newPostCallback() {
    newPost();
  }

  return (
      
    <div className="share">
      <form className="shareWrapper" onSubmit={onSubmit}>
      <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
        <img className="shareProfileImg" src={user.img} alt="" />
        </figure>
      </div>
      <div className="media-content">
      <textarea
          rows="4"
         placeholder="What's on your mind?"
         className="shareInput pr-1"
         id="mypost"
         name="desc"
         value={values.desc}
         onChange={onChange}
          />
          <button type="submit" className="button is-light">Post</button>
      </div>
    </div>
  </div>
</div>
      </form>

      
    </div>

    
  );
}