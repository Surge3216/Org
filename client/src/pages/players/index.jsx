import React from 'react'
import Navbar from '../../components/Navbar/index';
import Footer from '../../components/footer';
import Player from '../../components/players';


function Players() {
    return (
      
        <div>
           <Navbar/>
        <div className="homeContainer">
            <Player/>
        </div>
           <Footer/>
        </div>

    );
};

export default Players;