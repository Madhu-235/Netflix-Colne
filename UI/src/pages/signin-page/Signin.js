import React, { useEffect, useRef, useState } from 'react';
import Header3 from '../../components/Header3/Header3';
// import Footer2 from '../../components/footer2/footer2';
// import Footer from '../../components/footer/Footer';
import './signin.css'
import Footer3 from '../../components/footer3/Footer3';
import { firebaseAuth } from '../Base/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";



const Signin = () => {

    // const[data,setData]=useState(
    //     localStorage.getItem('mail')

    //     )

        const [error,seterror]=useState();
        const [error2,seterror2]=useState();

        const [showpass,Setshowpass]=useState(true)
        
        // const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        // const [email,setemail]=useState()
    
        // const [password,setpassword]=useState('')
        const nav=useNavigate()
    
        
    
        useEffect(()=>{
            document.title = "Netflix"
        },
        [])
        // const navigate = useNavigate()
        const handleChange=(async (e)=>{
            e.preventDefault()
            try{
                await signInWithEmailAndPassword(firebaseAuth, email, password).then(()=>nav('/browse'))
                localStorage.setItem("mail",email)
            }catch(err){
                if(err.code==='auth/email-already-in-use'){
                    seterror2("Email is already exists")
                    // console.log('data not here');
                    
                }else if(err.code=== 'auth/ivalid-email'){
                    seterror2('Email is not valid')
                    // console.log('data not here');

                }else if(err.code==='auth/invalid-password'){
                    seterror("not matcth")
                    // console.log('data not here');

                }else if(err.code==='auth/missing-password'){
                    seterror("Password contain  6-12 characters")
                    // console.log('data not here');

                }
            }
        })
        const [email, setemail] = useState(localStorage.getItem("myapp-email") || "");
  const [password, setpassword] = useState(localStorage.getItem("myapp-password") || "")

  const rememberCheck=useRef()

        function remember(){
            if(rememberCheck.current.checked){
              localStorage.setItem("myapp-email", email); localStorage.setItem("myapp-password", password)
            }
            else{
              localStorage.setItem("myapp-email", ""); localStorage.setItem("myapp-password", "")             
            }
          }
    

    
    return (
       <section id='signin_page'>
        <div className="signin">

            <div className="nav">
                <Header3/>
            </div>


            <div className="signin-form">
                <div className="form">
                    <div></div>
                    <div><h1>Sign In</h1></div>

                   <form action="">
                    <input type="email" placeholder='Email or phone number' value={email} onChange={(e)=>setemail(e.target.value)} name="" id="" /><br />
                    <small style={{color:'red'}}>{error2}</small>

<div style={{position:'relative'}}>
<input type={showpass?"password":"text"} placeholder='password'  value={password}  onChange={(e)=>setpassword(e.target.value)} name="" id="" /><br />
<p onClick={()=>Setshowpass(!showpass)} style={{position:'absolute',top:'13px' ,right:'10px',color:'white',cursor:'pointer'}}>{showpass?<IoEye />:<IoEyeOff />}</p>
</div>
                    

                    <small style={{color:'red'}}>{error}</small>


                    <button className='btn1' onClick={handleChange}>Sign In</button><br />

                    {/* <span className='Or'>OR</span><br />

                    <button className='btn2'>Use a Sign-in code</button><br /> */}

                    <span><Link>Forgot a password?</Link></span>
                   </form>
                    <div>
                   <div className='checkbox'>
                    <input type="checkbox" onClick={remember} ref={rememberCheck} name="" id=""/>
                    <span>Remember me</span>  
                   </div>
                    <p className='signup'>  New to Netflix?   <span><Link>Sign up now.</Link></span></p>

                    <p className='small'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link>Learn more.</Link></p>
                   </div>
                </div>


           
            </div>
 <div className='footer'>
            <Footer3/>
           </div>
          
        </div>
       </section>
    );
};

export default Signin;