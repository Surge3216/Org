import "./share.css";
import React, { useContext } from 'react';
import photo from "./place.png";
import { UserContext } from '../../context/auth';
import { useForm } from '../../util/hooks';
import axios from 'axios'

export default function Share() {

  const { onChange, onSubmit, values } = useForm(newPostCallback, {
    desc: '',
  });


  
  

  const { user } = useContext(UserContext)
  

  function newPost(){
    const userPost = {
      userId: user.userId,
      username: user.username,
      desc: values.desc
    }
    console.log(userPost)

    axios.post('http://localhost:8080/api/posts/', userPost)
    .then(function(response){
      console.log(response)
    })
  }

  function newPostCallback() {
    newPost();
  }

  return (
      
    <div className="share">
      <form className="shareWrapper" onSubmit={onSubmit}>
        <div className="shareTop" >
          <img className="shareProfileImg" src={photo} alt="" />
          <input
         placeholder="What's on your mind?"
         className="shareInput"
         id="mypost"
         name="desc"
         type="text"
         value={values.desc}
         onChange={onChange}
          />
        </div>
        <hr className="shareHr"/>

            <button type="submit" className="shareButton">Share</button>

      </form>
    </div>
  );
}