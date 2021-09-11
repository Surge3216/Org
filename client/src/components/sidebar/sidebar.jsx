import "./sidebar.css";
import {
  DirectionsRun,
  DoneAll,
  BrightnessHigh,
  Whatshot,
  Accessibility,
  Stars
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <DirectionsRun className="sidebarIcon" />
            <span className="sidebarListItemText">Next Challenge is on:</span>
          </li>
          <li className="sidebarListItem">
            <DoneAll className="sidebarIcon" />
            <span className="sidebarListItemText">Immunity Winner:</span>
          </li>
          <li className="sidebarListItem">
            <BrightnessHigh className="sidebarIcon" />
            <span className="sidebarListItemText">Idols left in the game:</span>
          </li>
          <li className="sidebarListItem">
            <Whatshot className="sidebarIcon" />
            <span className="sidebarListItemText">Tribal Council:</span>
          </li>
          <li className="sidebarListItem">
            <Accessibility className="sidebarIcon" />
            <span className="sidebarListItemText">Players left: </span>
          </li>
          <li className="sidebarListItem">
            <Stars className="sidebarIcon" />
            <span className="sidebarListItemText">Finale:</span>
          </li>
          
        </ul>
        <hr className="sidebarHr" />
        
        <div className="card ">
        <p className="title has-text-centered">Latest elimination</p>
        <div className="card-image">
    <figure className="image is-3by3">
      <img src="https://static.parade.com/wp-content/uploads/2021/08/Ricard-Foye-Survivor-41-Header.jpg" alt="Placeholder"/>
    </figure>
    </div>
    <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">Matt</p>
      </div>
    </div>

    <div className="content">
    Matt, it was very clear from the moment we met in Endure9 that I was
     going to ask you to play XTC. As many players have said, you're very 
     easy to identify as a late game player, and here we are... you made 
     it all the way to final 6 even though you had such a big target on 
     your back the whole way there. You're quite the triple threat my 
     friend - super strategic, amazing social game and a comp beast. 
     You were so close to getting to the end Matt, but as you know, 
     your target was just too big and once you were defenseless without 
     immunity or idol, they took their shot. There's no doubt that if you 
     had made it to the end you would have been a deserving winner. 
     Congrats on playing an amazing game dude and welcome to the XTC fam!
      <br/>
    </div>
  </div>
  </div>
      </div>
    </div>
  );
}