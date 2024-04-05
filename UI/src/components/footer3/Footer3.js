import React from 'react';
// import { FaGlobe } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";


import'./footer3.css'

const Footer3 = () => {
    return (
        <div id='footer3'>
        {/* <div></div> */}
        <div className="footer2">
            <p>Questions? Call <a href=""> 000-800-919-1694</a></p>
            <ul>
                <li><a href=""><span>FAQ</span></a></li>
                <li><a href=""><span>Help Centre</span></a></li>
                {/* <li><a href=""><span>Netflix Shop</span></a></li> */}
                <li><a href=""><span>Terms of Use</span></a></li>
                <li><a href=""><span>Privacy</span></a></li>
                <li><a href=""><span>Cookie Preferences</span></a></li>
                <li><a href=""><span>Corporate Information</span></a></li>
            </ul>
            <div className='globe'>
                <span><IoLanguage />

            <select name="" id="" style={{border:'1px solid'}}>
                <option value="" key="">English</option>
                <option value="" key="">Hindi</option>
            </select>
            </span>
        </div>
        </div>
        {/* <div>
            <select name="" id="" style={{border:'1px solid',color:'black'}}>
                <option value="" key="">English</option>
            </select>
        </div> */}
    </div>

    );
};

export default Footer3;