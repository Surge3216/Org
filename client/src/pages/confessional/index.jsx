import React from 'react';
import About from '../../components/Abouts';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import Feed from '../../components/feed';

function Confessional() {
    return (
        <div>
          <Navbar/>
          <div className= "homeContainer">
              <About/>
              <Feed />
          </div>
          <Footer/>  
        </div>
    )
}

export default Confessional
