import React, { useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "./style.css"
import axios from 'axios'

export default function Players()  {
  
  const [bioData, setBioData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/bio/players/all")
    .then(function (response) {
      setBioData(response.data)
      console.log(response)
    }).catch(err=>{
      console.log(err);
    })
  }, [])
  

const bioLink = bioData.map((bio)=>(
  <div className="column is-4 has-text-centered" key={bio.userId}>
    <figure className ="image is-90x120 ">
      <img src={bio.img} alt={bio.username} />
      <Link
      to={`/confessionals/${bio.userId}`}
      
      >{bio.username}</Link>
    </figure>
  </div>
))



return(
  <div className="columns inst"> 
  {bioLink}
  </div>
)
  

  
};
