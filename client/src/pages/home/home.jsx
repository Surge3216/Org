import "./home.css"
import { useContext } from 'react';
import { UserContext } from '../../context/auth';
import Navbar from '../../components/Hero/index'
import Footer from '../../components/footer';
import Story from '../../components/story';
import Players from '../../components/players';
import Share from '../../components/Share';
import Sidebar from '../../components/sidebar/sidebar';
import Rightbar from "../../components/rightbar";





export default function Home() {
  const { user } = useContext(UserContext)


  return (
        <div >
          <Navbar />
          <div className= "homeContainer">
          <Sidebar/>
          <Share />
          <Rightbar/>

          </div>
          <Footer/>
        </div>
    )
}
