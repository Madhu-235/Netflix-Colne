import React, { useEffect, useRef, useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import {  useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import axios from 'axios';

const Accordion = ({item}) => {

    const [isActive, setIsActive] = useState(-1);



    const handleClick = (index) => {
      setIsActive(index === isActive ? -1 : index);}

      const nav=useNavigate()

    // const[data,setdata]=useState()
    const [show,setshow]=useState(false)
    // function change(e){
    //     setdata(e.target.value)
    // }
    // console.log(data)

    const [send,setSend]=useState([{mail:''}])

    const [items,setItems]=useState([])
    
    console.log(items)
    // console.log(data);
    const ref=useRef()

    function change(e){
       
            setSend({[e.target.name]:e.target.value})

           
    }
    useEffect(()=>{      
        axios.get('https://65b77f8f46324d531d54bbef.mockapi.io/userdetails')
        .then(res => setItems(res.data))

    },[])
    
    console.log(items)

    function submit() {

            const vaild = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
                console.log(send)

            const {mail} = send; 
            if (typeof(send.mail)=== 'undefined') {
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
        <div className="accordion">
          <div className='box'>
      <h1>Frequently Asked Questions</h1>
      </div>

       <div className='box'>
         {item.map((item, index) => (
            <div key={item.title} >
              <div onClick={() =>handleClick(index)} className='title'>
                <h3>{item.title}</h3>
                <p>{index ===(isActive)? <IoCloseOutline style={{fontSize:'50px'}} />:'+'}</p>
              </div>
               {index === isActive &&
                <div className='content'>
                <p >{item.content}</p>
                <p >{item.content1}</p>
                </div>}
            </div>
         ))}
      </div>

      <div className='contact'>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div style={{position:'relative'}}>
          <input type="email" placeholder='Email address' ref={ref}   name="mail" id="" onChange={change} />
          {show && <li style={{position:'absolute',bottom:'-30px',left:'0px ', listStyle:'none',color:'red'}}><GiCancel /><small>Email is Required</small></li>}

         <button onClick={()=>submit()}>Get Started   
          <span><BsChevronRight /></span>

          </button>
        </div>
      </div>
      </div>
    );
};

export default Accordion;