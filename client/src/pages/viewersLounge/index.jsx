import "./home.css"
import Navbar from '../../components/Navbar/index'
import Footer from '../../components/footer';
import Feed from '../../components/feed/index';
import Sidebar from '../../components/sidebar/sidebar'





export default function Vl() {
  return (
        <div>
          <Navbar/>
          <div className= "homeContainer">
          <Sidebar/>
          <Feed />
          </div>
          <Footer/>
        </div>
    )
}