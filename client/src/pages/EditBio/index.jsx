import React from 'react'
import BioForm from '../../components/BioForm'
import Footer from '../../components/footer'
import Navbar from '../../components/Navbar'

export default function EditBio() {
    return (
        <div>
            <Navbar/>
            <div className= "container">
                <br/>
                <BioForm/>
                <br/>
            </div>    
            <Footer/>
        </div>
    )
}
