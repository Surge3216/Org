import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import './AboutMe.css'
import axios from "axios";
import { UserContext } from "../../context/auth";


export default function Box(){
    const { playerState } = useContext(PlayerContext)
    const { user } = useContext(UserContext)
    const playerId = playerState.userId
    const userId = {
        userId: user.userId
    }
    const followURL = `/api/users/${playerId}/follow`;
    const unfollowURL = `/api/users/${playerId}/unfollow`
    
    const followHandler= ()=> {
        axios.put(followURL, userId)
        .then(function(response){
            window.location.href = "/"
        }).catch(err =>{
            console.log(err)
        })
    }

    const unfollowHandler= ()=> {
        axios.put(unfollowURL, userId)
        .then(function(response){
            console.log(response)
        }).catch(err =>{
            console.log(err)
        })
    }

    return(
    <div className="aboutBar">
        <div className="aboutBarWrapper ">
            <div className="columns aboutBarListItem">
            <div className="column is-12 has-text-centered">
                <div className="aboutMe ">
                    <h2 className="title">{playerState.username}</h2>
                    <img src={playerState.img} alt={playerState.username} />
                    <br />
                    <button className="button is-dark" onClick={followHandler}>Follow</button>
                    <button className="button is-dark" onClick={unfollowHandler}>Unfollow</button>
                </div>
    
      <div className="has-text-left aboutMe ">
        <p className="title">About Me</p>
        <h6 className=""><strong>Home</strong></h6>
        <p>{playerState.city}, {playerState.state}</p>
        <br></br>
        <h6 className=""><strong>Age</strong></h6>
        <p>{playerState.age}</p>
        <br></br>
        <h6 className=""><strong>Why do you think you'll win?</strong></h6>
        <p>{playerState.aboutMe}</p>
        <br></br>
      </div>

      </div>
            </div>
        </div>

    </div>
    )
}