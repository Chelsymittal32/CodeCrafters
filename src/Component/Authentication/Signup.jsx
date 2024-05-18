import React, { useState } from 'react'
import '../StyleComp/signup.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
    const Nav = useNavigate();
    const [regval,setregVal] = useState([
        {
            username:"",
            email:"",
            password:""
        }
    ]
    )
    const handleclick = (e)=>{
        setregVal({
            ...regval,[e.target.name] : e.target.value
        })
    }

    const signupbtn = ()=>{
        axios.post('http://localhost:5000/api/register',regval)
        .then((res)=> {
            if(res.data.msg === "User is Successfully Registered "){
                toast.success(res.data.msg);
                setTimeout(()=>{
                    Nav("/login")
                },1000)
            }
            else{
                toast.warn(res.data.msg)
            }
        }).catch(err=>console.log(err))

        setregVal({
            username:"",
            email:"",
            password:""
        })
    }
  return (
    <div className='signup'>
        
            <form onSubmit={(e)=>e.preventDefault()}>
            <h4>Signup and start learning</h4>
                <div className='authfield'>
                    <input type='text' id='name' name='username'  onChange={handleclick} required />
                    <label htmlFor='name'>Full name</label>
                </div>
                <div className='authfield'>
                    <input type='email' id='mail' name='email'  onChange={handleclick} required />
                    <label htmlFor='mail'>Email</label>
                </div>
                <div className='authfield'>
                    <input type='password' id='pass' name='password'  onChange={handleclick} required />
                    <label htmlFor='pass'>Password</label>
                </div>
                <button type='submit' onClick={()=>signupbtn()} className='subtn'>Sign up</button>
            </form>
            <div className='term'>
                <p>By signing up, you agree to our <span>Terms</span> of Use and <span>Privacy Policy</span>.</p>
            </div>
            <div className='already'>
                <p>Already have an Account? <span onClick={()=> Nav("/login")}>Log in</span></p>
            </div>
            <ToastContainer/>
    </div>
  )
}

export default Signup