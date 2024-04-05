import React, { useEffect, useState } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer2 from '../../components/footer2/footer2';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../Base/firebaseConfig';

const Page3 = () => {

    // const[data,setData]=useState(
    //     localStorage.getItem('mail')

    //     )

        const [error,seterror]=useState();
        const [error2,seterror2]=useState();
        
        // const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const [email,setemail]=useState(localStorage.getItem("mail"))
    
        const [password,setpassword]=useState('')
        const nav=useNavigate()
        
    
        useEffect(()=>{
            document.title = "Netflix"
        },
        [])
        // const navigate = useNavigate()
        const handleChange=(async (e,err)=>{
            e.preventDefault()
            try{
                await signInWithEmailAndPassword(firebaseAuth, email, password).then(() =>nav('/browse'))
            }catch(err){
                if(err.code==='auth/email-already-in-use'){
                    seterror2("Email is already exists")
                }else if(err.code=== 'auth/ivalid-email'){
                    seterror2('Email is not valid')
                }else if(err.code==='auth/missing-password'){
                    seterror("Please should be contain between 6 to 60 characters")
                }else if(err.code==='auth/weak-password'){
                    seterror("")
                    alert('no')
                }
            }
        })
    


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


                    <h5>Email</h5>
                    <input type="email" style={{border:'none',marginTop:'-50px',padding:'0',fontFamily:'500',outline:'none'}} placeholder='Email' name="" id="" value={email} onChange={(e)=>setemail(e.target.value)} readOnly /><br />
                    <small style={{color:'red'}}>{error2}</small>


                    <input type="password" placeholder='Add a password' onChange={(e)=>setpassword(e.target.value)} name="" id="" />
                    <small style={{color:'red'}}>{error}</small>


                    <button onClick={handleChange}>SignIn</button>

                </div>
            </div>
        </div>

        <div>
            <Footer2 />
        </div>

    </div>

    );
};

export default Page3;