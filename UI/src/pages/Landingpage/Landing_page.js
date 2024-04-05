import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import './Landing_page.css'
import { BsChevronRight } from "react-icons/bs";

import AccordionData from './Accordion_data';
import Footer from '../../components/footer/Footer';
import Image from '../Images/download.gif'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GiCancel } from "react-icons/gi";




const Landingpage = () => {

    const nav = useNavigate()
    // const [data, setdata] = useState()
    const [show, setshow] = useState(false)
    const [send,setSend]=useState([{mail:''}])

    const [items,setItems]=useState([])
    
    // console.log(items)
    // console.log(data);
    const ref=useRef()

    function change(e){
       
            setSend({[e.target.name]:e.target.value})

           
    }
    useEffect(()=>{      
        axios.get('https://65b77f8f46324d531d54bbef.mockapi.io/userdetails')
        .then(res => setItems(res.data))

    },[])

    function submit() {

            const vaild = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
                console.log(send.mail)

            const {mail} = send; 
            if (typeof(send.mail)=== 'undefined' || send.mail==='') {
                setshow(true)
                // console.log('email is required')
    
            }else if (vaild.test(send.mail)) {
                localStorage.setItem('mail', mail)
                console.log(items);
                let userEmailItems = items.find(p => p.mail === mail)

                if(userEmailItems){
                    nav('/signup/password')
                    // nav('./home')

                }else{
                    axios.post('https://65b77f8f46324d531d54bbef.mockapi.io/userdetails',send)
                    nav('/signup1')

                }
            }else{
                alert("error")
            }
           
        }



    return (
        <section id='landing-page'>
            <div className='Home'>

                <div className="nav">
                    <Header />
                </div>



                <div className='main-page'>
                    <div className="mail-page">
                        <div className='h1'>
                            <h1>Unlimited movies, TV shows and more</h1>
                        </div>

                        <div className='middle-content'>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        </div>

                        <div className='input' style={{ position: 'relative' }}>
                            <input type="email" placeholder='Email address' name="mail" ref={ref} value={send.mail} id="" required onChange={change} />
                            {show && <li style={{ position: 'absolute', bottom: '-30px', left: '130px ', listStyle: 'none', fontSize: '16px',color:'red' }}>  <GiCancel /><small>Email is Required</small></li>}

                            {/* <Link to='/signup1'> */}
                            <button className='button' onClick={() => submit()} down>Get Started
                                <span><BsChevronRight /></span>


                            </button>

                            {/* </Link> */}
                        </div>

                        <div>

                        </div>
                    </div>
                </div>


            </div>

            <div className='home2'>
                <div className="page1">
                    <div className="left">
                        <div className='content'>
                            <h1>Enjoy on your TV</h1>
                            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                        </div>
                    </div>

                    <div className='right' >

                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" class="default-ltr-cache-1d3w5wq" />
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video>
                    </div>
                </div>
            </div>




            {/* ============================================= */}

            <div className='home2 home3'>
                <div className="page1">


                    <div className='right' >

                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="nmhp-card-animation-asset-image" class="default-ltr-cache-1d3w5wq" />


                        <div className='box'>

                            {/* <div className='img'> */}
                            <div className='image'>
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            </div>

                            <div className="stranger_txt">

                                <div id="" class="default-ltr-cache-162uqtg e15c37ii4" data-uia="">
                                    <h3>Stranger Things</h3>
                                    <p>Downloading...</p>
                                </div>

                                <div className="gif">
                                    <img src={Image} alt="" className='gif' />
                                </div>

                            </div>

                            {/* </div> */}
                        </div>

                    </div>



                    <div className="left">
                        <div className='content'>
                            <h1>Download your shows to watch offline</h1>
                            <h3>Save your favourites easily and always have something to watch.</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}


            <div className='home2 home4'>
                <div className="page1">
                    <div className="left">
                        <div className='content'>
                            <h1>Enjoy on your TV</h1>
                            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                        </div>
                    </div>

                    <div className='right' >

                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop muted></video>
                    </div>
                </div>
            </div>

            {/* --------------------------------------- */}

            <div className='home2 home3 home5'>
                <div className="page1">


                    <div className='right' >

                        <img alt="" src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" data-uia="nmhp-card-animation-asset-image" />
                        {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay loop muted></video> */}
                    </div>
                    <div className="left">
                        <div className='content'>
                            <h1>Create profiles for kids</h1>
                            <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership..</h3>
                        </div>
                    </div>


                </div>
            </div>

            {/* ---------------------- */}

            <div className='accordion_box'>

                <AccordionData />


            </div>

            <footer>
                <Footer />
            </footer>





        </section>
    );
};

export default Landingpage;