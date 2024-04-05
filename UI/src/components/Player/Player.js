import React from 'react';
import vid from '../Backgroundimages/vid1.mp4'
import './Player.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Player = () => {

    const nav=useNavigate()
    function back(){
        nav(-1)
    }

    return (
        <div id='player'>
            <span className='closeVid' onClick={back}><FaArrowLeftLong size={35}/> </span>
            <div className='video'>
            <video className='video' src={vid} controls autoPlay muted loop></video>

            </div>
        </div>
    );
};

export default Player;