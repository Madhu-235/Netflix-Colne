import React, { useEffect, useState } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer2 from '../../components/footer2/footer2';
import './page2.css'
import { firebaseAuth } from '../Base/firebaseConfig';
import {  useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Page2 = () => {
    const [error,seterror]=useState();
    const [error2,seterror2]=useState();
    
    // const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const [email,setemail]=useState(localStorage.getItem("mail"))

    const [password,setpassword]=useState('')


    const nav=useNavigate()
    // const[data,setData]=useState(
    //     localStorage.getItem('mail')

    //     )
    // const [mail,setmail]=useState()

const [userdetailes,setUserdetails]=useState(
    {
        email:email,
        password:''
    }
)

// const [getdetails,setgetdetails]=useState([])


function change(e){
    // setData(e.target.value)
    setUserdetails({...userdetailes,[e.target.name]:e.target.value})
    setemail(e.target.value)        

} 

function changes(e){
    setUserdetails({...userdetailes,[e.target.name]:e.target.value})
    setpassword(e.target.value)        

} 
//  useEffect(()=>{      
//     axios.get('https://65b77f8f46324d531d54bbef.mockapi.io/Users')
//     .then(res => setgetdetails(res.data))
// },[])

useEffect(()=>{
    document.title = "Netflix"
},
[])
// const navigate = useNavigate()
const handleChange=(async(e)=>{
    // e.preventDefault()
    try{
        await createUserWithEmailAndPassword(firebaseAuth, email, password).then(()=>nav('/browse'))
        
                

        // const vaild = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

        // if (userdetailes.email== '') {
        //     // setshow(true)
        //     console.log('email is required')

        // }else if (vaild.test(userdetailes.email)) {
        //     // console.log('data is here') 
        //     const userEmailItems = getdetails.find(p => p.email === userdetailes.email)

        //     if(userEmailItems){
        //         console.log('data is here')
        //         // nav('/signup/password')
        //         nav('./home')


        //     }else{
        //         console.log('the data is not match');
        //         var url='https://65b77f8f46324d531d54bbef.mockapi.io/Users'
        //         e.preventDefault()
        //         setUserdetails({
        //                 email:data,
        //                 password:''
        //             })
        //         axios.post(url,
        //             userdetailes
        //         )
        //     }
        // }else{
        //     // alert("error")
        // }
    }catch(err){
        console.log(err.code)
        if(err.code==='auth/email-already-in-use'){
            seterror2("Email is already exists")
        }else if(err.code=== 'auth/ivalid-email'){
            seterror2('Email is not valid')
        }else if(err.code==='auth/missing-password'){
            seterror("Please should be contain between 6 to 60 characters")
        }else if(err.code==='auth/weak-password'){
            seterror("")
        }
    }
})




//  function createPass(e){
//     handleChange()

//     const vaild = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

//             if (userdetailes.email== '') {
//                 // setshow(true)
//                 console.log('email is required')
    
//             }else if (vaild.test(userdetailes.email)) {
//                 // console.log('data is here') 
//                 const userEmailItems = getdetails.find(p => p.email === userdetailes.email)

//                 if(userEmailItems){
//                     console.log('data is here')
//                     // nav('/signup/password')
//                     // nav('./home')


//                 }else{
//                     console.log('the data is not match');
//                     var url='https://65b77f8f46324d531d54bbef.mockapi.io/Users'
//                     e.preventDefault()
//                     setUserdetails({
//                             email:data,
//                             password:''
//                         })
//                     axios.post(url,
//                         userdetailes
//                     )
//                 }
//             }else{
//                 // alert("error")
//             }
           



//  }


    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div className='signup-page2'>
                <div className='box'>
                    <div>
                        <p className='step'>STEP <span className='num'>1</span> OF <span className='num'>3</span></p>

                        <h2>Create a password to start your membership</h2>

                        <p>Just a few more steps and you're done! <br />
                            We hate paperwork, too.
                        </p>



                        <input type="email" placeholder='Email' name="email"  value={email}  onChange={change}  /><br />
                        <small style={{color:'red'}}>{error2}</small>
                            
                        <input type="password" placeholder='Add a password' name='password' onChange={changes}  id="" /><br />
                        <small style={{color:'red'}}>{error}</small>

                           
                        <button onClick={handleChange} >Next</button>

                    </div>
                </div>
            </div>

            <div>
                <Footer2 />
            </div>

        </div>
    );
};

export default Page2;