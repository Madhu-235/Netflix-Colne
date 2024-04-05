import React, { useState } from 'react';
import './HomeFooter.css'

import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeFooter = () => {


    const [click,setclick]=useState('Service Code')
    return (
        <div id='HomeFooter'>
            <div className="mediaIcons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <IoLogoYoutube />
            </div>
            <div>
                <ul className='homefooterlist'>
                    <Link><li>Audio Description</li></Link>
                    <Link><li>Help Center</li></Link>
                    <Link><li>Gift Cards</li></Link>
                    <Link><li>Media Center</li></Link>
                    <Link><li>Investor Relations</li></Link>
                    <Link><li>Jobs</li></Link>
                    <Link><li>Terms of Use</li></Link>
                    <Link><li>Privacy</li></Link>
                    <Link><li>Legal Notices</li></Link>
                    <Link><li>Cookie Preferences</li></Link>
                    <Link><li>Corporate Information</li></Link>
                    <Link><li>Contact Us</li></Link>
                    
                </ul>
            </div>

            <div>
                <button  onClick={()=>setclick('065-374')}>{click}</button>
            </div>

            <div>
                <small>&copy; 1997-2024 Netflix,Inc.</small>
            </div>
        </div>
    );
};

export default HomeFooter;