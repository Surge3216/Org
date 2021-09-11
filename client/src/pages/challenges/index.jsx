import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import ChallengeCard from '../../components/challengeCard';
import { Link } from 'react-router-dom';

function Challenges() {
    return (
        <div>
            <Navbar/>
            <Link to='newChallenge'> <AddCircleIcon/> </Link>
            <div className='homeContainer'>
            <ChallengeCard/>
            </div>
            <Footer/>
        </div>
    );
};

export default Challenges;