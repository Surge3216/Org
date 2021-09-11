import React from 'react'
import ChallengeForm from '../../components/ChallengeForm'
import Footer from '../../components/footer'
import Navbar from '../../components/Navbar'

export default function EditBio() {
    return (
        <div>
            <Navbar/>
            <div className= "container">
                <br/>
                <ChallengeForm/>
                <br/>
            </div>    
            <Footer/>
        </div>
    )
}
