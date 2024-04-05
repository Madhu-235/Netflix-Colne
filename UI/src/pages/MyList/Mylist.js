import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import '../../components/Filterdata/Filterdata.css'
import vid from '../../components/Backgroundimages/vid.mp4'
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";


import Navbar from '../../components/Navbar/Nav';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const Mylist = () => {


    const Useremail = localStorage.getItem('mail')
    // console.log(Useremail)
    
    const [data,setdata]=useState([])
    // console.log(data)

    const img=useRef()

    useEffect(()=>{
        axios.get(`http://localhost:9999/data?userEmail=${Useremail}`)
        .then(res=>setdata(res.data))
    },[])
    // console.log(data)
    const getdata=()=>{
        axios.get(`http://localhost:9999/data?userEmail=${Useremail}`)
        .then(res=>setdata(res.data))
    }
    
    function deleteitem(id){
        axios.delete(`http://localhost:9999/data/${id}`)
    
        .then(()=>getdata())
    }
    
    





    return (
        <div>
            <div>
                <Navbar/>
            </div>
        <div id="main-cards-container" >

        <div id="cardsContainer" >

            {
                data.map((e) =>

                    <div className="Card" key={e._id} >

                       
                        <div className="imgCard"  >
                            <div className='itemHover' >
                                <img className='src pic' src={`https://image.tmdb.org/t/p/w500${e.details.src}`} ref={img} alt="" />

                                <video className="src vid" src={vid} autoPlay muted></video>

                                <div className='vid content_box'>

                                    <h4>{e.details.title}{e.details.name}</h4>
                                    {/* <p style={{color:'white'}}>{e.release_date}</p> */}
                                    <div className='icons'>
                                        <div>
                                            <FaCirclePlay size={28} />



                                            <IoIosCheckmarkCircleOutline size={32} onClick={()=>deleteitem(e._id)}/>

                                            <AiOutlineLike size={28} style={{ border: '2px solid white', borderRadius: '50%', padding: '5px' }} />
                                        </div>
                                        <div>
                                            <CiCircleChevDown size={32} />

                                        </div>
                                    </div>
                                    <small style={{ color: 'green', fontWeight: '500', marginLeft: '2rem' }}>96% Match</small>
                                    <small style={{ color: 'white', margin: '0px 1rem', marginTop: '-1rem' }}>-{e.original_language}-</small>
                                    <small style={{ color: 'white' }}>Avg-{e.vote_count}</small>

                                </div>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>

    </div>
    </div>
    );
};

export default Mylist;