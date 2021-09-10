import axios from "axios";
import './profile.css'
import Navbar from '../../components/Navbar/index'
import Box from "../../components/bios";
import PlayerFeed from "../../components/playerFeed";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../context/playerContext";

export default function Profile(){
  const [playerState, setPlayerState] = useState([])

    let { id } = useParams();
    
   
    
   useEffect(()=>{
    const url = `http://localhost:8080/api/bio/${id}`
      axios.get(url)
      .then(function(response){
        setPlayerState(response.data)
      }).catch(err=>{
        console.log(err);
      })
    },[id])

    return (
      <PlayerContext.Provider value= {{playerState, setPlayerState}} >
        <div>
          <Navbar/>
          <div className= "homeContainer">
          <Box/>
          <PlayerFeed/>
          </div>
        </div>
      </PlayerContext.Provider>
      );
}