import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import Hover from '../hover/Hover';
import vid from '../Backgroundimages/vid.mp4'
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import axios from 'axios';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../pages/Base/firebaseConfig';
import { useNavigate } from 'react-router-dom';
// import { current } from '@reduxjs/toolkit';


const Slider = ({ data }) => {
    
    const img = useRef()
    const slide = useRef()
    const [name, setName] = useState();
    const [src, setSrc] = useState();
    const [add,setadd]=useState(true)
    const [email,setemail]=useState(undefined)
    const [item,setitem]=useState([])
    const nav=useNavigate()
    const userEmail = localStorage.getItem('mail')
    // console.log(userEmail)

    const [dataget,setdataget]=useState([])

    const addToList = async (id) => {
        const filter = data.filter(e => e.id === id);
        setName(filter[0].title||filter[0].name);
        setSrc(filter[0].backdrop_path);
        setitem(filter[0])
        setadd(!add)

        

    };


    // console.log(item)
    useEffect(() => {
       
    // console.log(userEmail)
        try{
            if (name !== undefined && src !== undefined) {
                axios.post('http://localhost:9999/data', { userEmail,name,src});
            }
        }
       catch(e){
        // console.log(e.error)
       }
    //     if (email !== undefined) {
    //         axios.post('http://localhost:9999/data', { email,data:item});
    //     }
    }, [userEmail,src,name]);

    // const getdata=()=>{
    //     axios.get('http://localhost:9999/data')
    //     .then(res=>setdata(res.data))
    // }
    useEffect(()=>{
        axios.get('http://localhost:9999/data')
        .then(res=>setdataget(res.data))
    },[])
    // console.log(dataget)
    
    // function deleteitem(id){
    //     axios.delete(`http://localhost:9999/data/${id}`)

    //     setadd(!add)
    
    //     // .then(()=>getdata())
    // }

   



    const slideLeft = () => {

        var slider = slide.current;
        slider.scrollLeft = slider.scrollLeft + 320;



    }

    const slideRight = () => {
        var slider = slide.current;
        slider.scrollLeft = slider.scrollLeft - 320;

    }

    return (
        <div id="main-slider-container" >

            <MdChevronLeft className="slider-icon left" onClick={slideRight} />
            <div id="slider" ref={slide}>

                {
                    data.slice(0,10).map((e) =>
                        <div className="slider-card" key={e.id} >
                            <div className="slider-card-image"  >
                                <div className='itemHover' >
                                    <img className='src pic' src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} ref={img} alt="" />

                                    <video className="src vid" src={vid} autoPlay muted></video>

                                    <div className='vid content_box'>
                                       
                                        <h4>{e.title || e.name}</h4>/
                                        <div className='icons'>
                                        <div>
                                        <FaCirclePlay size={28} />

{/* {(add)?<IoIosAddCircleOutline size={32} onClick={()=>addToList(e.id)} />:<IoIosCheckmarkCircleOutline  size={32}/>} */}
<IoIosAddCircleOutline size={32} onClick={()=>addToList(e.id)} />
                                            

                                            <AiOutlineLike size={28} style={{border:'2px solid white',borderRadius:'50%', padding:'5px'}}/>
                                            </div>
                                            <div>
                                            <CiCircleChevDown size={32}/>

                                            </div>
                                        </div>
                                        <small style={{color:'green',fontWeight:'500',marginLeft:'2rem'}}>96% Match</small>
                                        <small style={{color:'white',margin:'0px 1rem',marginTop:'-1rem'}}>-{e.original_language}-</small>
                                        <small style={{color:'white'}}>Avg-{e.vote_count}</small>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {/* {dataa.map()} */}
            </div>

            <MdChevronRight className="slider-icon right" onClick={slideLeft} />
        </div>
    )
}
export default Slider;




