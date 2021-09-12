import React, { useEffect, useState  } from 'react';
import moment from 'moment';
import './challengeCard.css';

import axios from "axios";

export default function ChallengeCard() {
  const [ challengeInfo, setChallengeInfo ] = useState([])

    

    useEffect(()=>{
      axios.get('/api/challenge/get/all')
      .then(function(response){
        setChallengeInfo(response.data)
        console.log(response.data)
      }).catch(err => {
        console.log(err);
      })
    }, [setChallengeInfo])

    const comps = challengeInfo.map((comp)=>(
      <div>
        
  <div className="card-grid-space">
    
    <a className="challengeCard" key={comp._id} href={`#openModal-about${comp._id}`} style= {{backgroundImage: `url(${comp.coverImg})`}}>
      <div>
      
        <h1>{comp.title}</h1>
        <div className="date">{moment(comp.createdAt).fromNow(true)}</div>
        <div className="tags">
          <div className="tag">Due by: {comp.dueDate} </div>
        </div>
      </div>
    </a>
  </div>

  <div id={`openModal-about${comp._id}`} className="modalDialog">
      <div>
         <a href="#close" title="Close" className="close">X</a>
         <h2 className="title">{comp.title}</h2>
         <p>{comp.description}</p>
       </div>
   </div>
      </div>
    ))

    return (
        <div>
          <section className="cards-wrapper">
          {comps}
          </section>
        </div>
    )
}
