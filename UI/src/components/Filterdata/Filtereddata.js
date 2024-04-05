import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Filterdata.css'

import { FaCirclePlay } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import vid from '../Backgroundimages/vid.mp4'
import { useDispatch, useSelector } from 'react-redux';
import { mov } from '../../Reducers/Reducer2';
import axios from 'axios';



const Filtereddata = ({ data }) => {
    console.log(data)
    const img = useRef()
    // const dispatch = useDispatch()
    // const select = useSelector(state => state.moviesdata.movies)
    // console.log(select)

// useEffect(()=>{
        for(var i in data){
            var filteredData;
            if(data[i].title){
                filteredData=data.filter((value, index, self) =>
                index === self.findIndex((e) => (
                   e.title=== value.title
                ))
                )
            }
            else if(data[i].name){
                
               
                filteredData=data.filter((value, index, self) =>
                    index === self.findIndex((e) => (
                       e.name=== value.name
                    ))
                    )
  
            }else{
                alert('not here')

            }
        }

    console.log(data.name===true)
   
//   
   

const [name, setName] = useState();
const [src, setSrc] = useState();

const addToList = async (id) => {
    const filter = data.filter(e => e.id === id);
    setName(filter[0].title||filter[0].name);
    setSrc(filter[0].backdrop_path);
};

useEffect(() => {
    console.log(name)
    console.log(src)
    if (name !== undefined && src !== undefined) {
        axios.post('http://localhost:9999/data', { name, src });
    }
}, [name, src]);


    return (
        <div id="main-cards-container" >

            <div id="cardsContainer" >

                {
                    filteredData.map((e) =>



                        <div className="Card" key={e.id} >

                           
                            <div className="imgCard"  >
                                <div className='itemHover' >
                                    <img className='src pic' src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} ref={img} alt="" />

                                    <video className="src vid" src={vid} autoPlay muted></video>

                                    <div className='vid content_box'>

                                        <h4>{e.title}{e.name}</h4>
                                        <p style={{color:'white'}}>{e.release_date ||e.first_air_date}</p>
                                        <div className='icons'>
                                            <div>
                                                <FaCirclePlay size={28} />


                                                <IoIosAddCircleOutline onClick={()=>addToList(e.id)} size={32} />

                                                <AiOutlineLike size={28} style={{ border: '2px solid white', borderRadius: '50%', padding: '5px' }} />
                                            </div>
                                            <div>
                                                <CiCircleChevDown size={32} />

                                            </div>
                                        </div>
                                        {/* <small style={{ color: 'green', fontWeight: '500', marginLeft: '2rem' }}>96% Match</small>
                                        <small style={{ color: 'white', margin: '0px 1rem', marginTop: '-1rem' }}>-{e.original_language}-</small>
                                        <small style={{ color: 'white' }}>Avg-{e.vote_count}</small> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }


            </div>

        </div>
    );
};

export default Filtereddata;