import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/auth";

export default function About(){
    const[player, setPlayer] = useState([])
    const { user } = useContext(UserContext)
    const id = user.userId

    useEffect(()=>{
        const url = `http://localhost:8080/api/bio/${id}`
          axios.get(url)
          .then(function(response){
            setPlayer(response.data)
          }).catch(err=>{
            console.log(err);
          })
        },[id]);

        return(
            <div className="aboutBar">
            <div className="aboutBarWrapper ">
                <div className="columns aboutBarListItem">
                <div className="column is-12 has-text-centered">
                    <div className="aboutMe ">
                        <h2 className="title">{player.username}</h2>
                        <img src={player.img} alt={player.username} />
                        <br />
                    </div>
        
          <div className="has-text-left aboutMe ">
          <Link to="/edit/bio"
          >
          <button>Edit</button>
          </Link>
            <p className="title">About Me</p> 
            <h6 className=""><strong>Home</strong></h6>
            <p>{player.city}, {player.state}</p>
            <br></br>
            <h6 className=""><strong>Age</strong></h6>
            <p>{player.age}</p>
            <br></br>
            <h6 className=""><strong>Why do you think you'll win?</strong></h6>
            <p>{player.aboutMe}</p>
            <br></br>
          </div>
    
          </div>
                </div>
            </div>
    
        </div>
        )
}