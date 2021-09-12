import React, { useEffect, useState, useContext} from 'react';
import "./style.css"
import { UserContext } from '../../context/auth';
import axios from 'axios'

export default function Players()  {
  const {user} = useContext(UserContext)
  const [userData, setUserData] = useState([])
  const [bioData, setBioData] = useState([])
  const userId = {
    userId: user.userId
  }
  
  useEffect(()=>{

    axios.get("/api/bio/players/all")
    .then(function (response) {
      setBioData(response.data)
      console.log(response)
    }).catch(err=>{
      console.log(err);
    })
  }, [])

  function followHandler(bio){
    const followURL = `/api/users/${bio}/follow`
    axios.put(followURL, userId)
    .then(function(response){
      console.log(response)
      updateFollowList()
    }).catch(err =>{
        console.log(err)
    })
}

const unfollowHandler= (bio)=> {
  const unfollowURL = `/api/users/${bio}/unfollow`
  axios.put(unfollowURL, userId)
  .then(function(response){
    updateFollowList()
  }).catch(err =>{
      console.log(err)
  })
}

const updateFollowList = () => {
  axios.get(`/api/users/${user.userId}`)
  .then(function(response){
    console.log(response.data.following)
    setUserData(response.data.following)
  }).catch(err =>{
    console.log(err)
})
}
  

const bioLink = bioData.map((bio)=>(
  <div className="bioCard" key={bio._id}>
    <img src={bio.img} alt="Person" className="card__image"/>
    <p className="card__name">{bio.username},  {bio.age}</p>
    <p>{bio.city}, {bio.state}</p>
      {userData.includes(bio.userId) ?
      <button className="btn draw-border" id={bio.userId} onClick={() => unfollowHandler(bio.userId)}>Unfollow</button> 
      : <button className="btn draw-border" id={bio.userId} onClick={() => followHandler(bio.userId)}>Follow</button>
      }
    <div className="bioP p-4">
    <p>{bio.aboutMe}</p>
    </div>

  </div>
))



return(
<div className="bioContainer">
  <div className="bioWrapper">
    {bioLink}
  </div>
</div>





)
  

  
};
