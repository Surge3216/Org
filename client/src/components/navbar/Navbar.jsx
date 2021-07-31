import './style.css'
import { Search, Person, Chat, Notifications } from  '@material-ui/icons'

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">LamaSocial</span>
            </div>
            <div className="navbarCenter"></div>
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input placeholder="Search for friends" className="searchInput" />
                </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat/>
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/profile.jpeg" alt="" className="navbarImg" />
            </div>
        </div>
    )
}
