import React from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer2 from '../../components/footer2/footer2';

import Image from '../Images/signup.png'

import './page1.css'
import { Link } from 'react-router-dom';


const Page1 = () => {
    return (
        <div>
            <div><Header2 /></div>

                <div className='signup-page1'>
                    <div className='box'>
                    <div>
                    <div>
                        <img src={Image} alt="No image" />
                    </div>
                    <p>STEP 1 OF 3</p>
                    <h2>Finish setting up your account</h2>
                    <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                    </div>
                    {/* <button >Next</button> */}
                <Link to='/signup2'><button >Next</button></Link> 
                    </div>
                </div>

                <footer>
                    <Footer2 />
                </footer>
        </div>
    );
};

export default Page1;