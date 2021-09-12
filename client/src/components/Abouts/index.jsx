import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/auth";

export default function About(){
    const[player, setPlayer] = useState([])
    const { user } = useContext(UserContext)
    const id = user.userId

    useEffect(()=>{
        const url = `/api/bio/${id}`
          axios.get(url)
          .then(function(response){
            setPlayer(response.data)
          }).catch(err=>{
            console.log(err);
          })
        },[id]);

        return(
          <div className="sidebar">
      <div className=".aboutSidebarWrapper ">
          <div className="bioCard" key={player._id}>
          <img src={player.img} alt="Person" className="card__image"/>
          <p className="card__name">{player.username},  {player.age}</p>
          <p>{player.city}, {player.state}</p>
          <Link to='/edit/bio'><button className="btn draw-border">Edit</button></Link>
          <div className="bioP p-4">
          <p>{player.aboutMe}</p>
          </div>
          </div>
          </div>
        </div>
        )
}