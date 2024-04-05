import React, { useEffect, useRef, useState } from 'react';
import './Trailer.css'
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import vid from '../Backgroundimages/vid2.mp4'
import Player from '../Player/Player';
import { Link } from 'react-router-dom';



const Trailer = ({data,channel}) => {

    // console.log(data)
    // console.log(channel)

    const [set,setSet]=useState([])
    const trailer=data

    const [play,setplay]=useState(false)

    // console.log(trailer);

   

    const bdp = [];
    const title=[];
    const overview=[]
 
    for(var i in trailer){

       bdp.push( trailer[i].backdrop_path)
       title.push(trailer[i].title||trailer[i].name)
       overview.push(trailer[i].overview)
    }
    // console.log(bdp.length)

    useEffect(()=>{
        const random = Math.floor(Math.random() * bdp.length)&& Math.floor(Math.random() *title.length)&& Math.floor(Math.random() *overview.length);
       

        setSet([bdp[random],title[random],overview[random]])

    },[trailer]) 


    const overView=useRef()
    const Title=useRef()
    const buttons=useRef()
    const video=useRef()
    const content=useRef()

    setTimeout(() => {

        if(overView.current!==null &&title.current!==null&&buttons.current!==null){
        overView.current.style.display='none'
        overView.current.style.transition='.4s'
        Title.current.style.marginTop='120px'
        
        Title.current.style.fontSize='40px'
        Title.current.style.transition='.7s'
        buttons.current.style.marginTop='20px'
        }
    }, 3000);    

    setTimeout(() => {

        if(video.current!==null){
        video.current.style.display='block';
        // video.current.style.transition='.4s ease-in-out'
        // content.current.style.zIndex='2'
        }
    }, 5000);



    return (
        <div className='containerr' >
            <div className="img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${set[0]})`,position:'relative'}}>
                {/* <div  style={{display:'none',width:'100%'}}> */}
                <video  ref={video}   src={vid} autoPlay muted style={{ display:'none',width: "100%", height: "100%" ,objectFit:'cover'}}></video>

                {/* </div> */}
                {/* <div className='d-flex'> */}

                
            <div ref={content} className='datacontent' >
                <h1 ref={Title}>{set[1]} </h1>
                {/* <h1 style={{color:'white'}}></h1> */}

                <p ref={overView}>{set[2]}</p> 
                

                <div ref={buttons}>
                  <Link to={"/player"}> <button className='btn1' ><FaPlay size={26} style={{marginRight:'8px'}}/>Play</button></Link> 
                    <button className='btn2'><IoIosInformationCircleOutline size={35} style={{marginRight:'8px'}}/>More Info</button>
                </div>
                </div>

                </div>

                    {/* </div> */}  

                    {/* <div style={{position:'absolute',top:'0',zIndex:'100'}}>
                        {play&&
                        <Player/>
                        }
                        </div>               */}
        </div>
    );
};

export default Trailer;