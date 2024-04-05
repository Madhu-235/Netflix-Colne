import React from 'react';
import './Footer.css'
import { IoLanguage } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="num">
                <h3>Question? Call<span>000-800-919-1694</span></h3>
            </div>
            <div className="help">
                <div className="block1">
                    <li> <a href="#">FAQ</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Speed Test</a></li>
                </div>
                <div className="block2">
                    <li><a href=""> Help Centre</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                    <li><a href="">Legal Notices</a></li>
                </div>
                <div className="block3">
                    <li><a href="">Account</a></li>
                    <li><a href="">Ways to Watch</a></li>
                    <li><a href="">Corporate Information</a></li>
                    <li><a href="">Only on Netflix</a></li>
                </div>
                <div className="block4">
                    <li><a href="">Media Centre</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Contact Us</a></li>
                    
                </div>
            </div>
            <div >

                <span className='lang'>
                    <IoLanguage />
                    <select name="" id="" className=''>
                        <option value="" className='eng'>English</option>
                        <option value="">Hindi</option>

                    </select>
                </span>
            </div>
            <div className="netflix">
                    <p>Netflix india</p>
            </div>

        </div>
    );
};

export default Footer;