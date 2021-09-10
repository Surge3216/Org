import React from 'react'
import Navbar from '../../components/Navbar/index';
import Footer from '../../components/footer';
import Player from '../../components/players';
import RightBar from '../../components/rightbar';


function Players() {
    return (
      
        <div>
           <Navbar/>
           <div className= "homeContainer">
           <RightBar/>
           <Player/>           
           </div>
           <Footer/>
        </div>

    );
};

export default Players;