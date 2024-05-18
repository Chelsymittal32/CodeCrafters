import React, { useState } from 'react'
import '../StyleComp/signup.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const Nav = useNavigate();
    const [regval,setregVal] = useState([
        {
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

    const signinBtn = ()=>{
        axios.post('http://localhost:5000/api/login',regval)
        .then((res)=> {
            if(res.data.msg === "User is successfully Login"){
                toast.success(res.data.msg);
                localStorage.setItem("name",res.data.name)
                localStorage.setItem("email",res.data.email)
                localStorage.setItem("token",res.data.token)
            }
            else{
                toast.warn(res.data.msg)
            }
        }).catch(err=>console.log(err))

        setregVal({
            email:"",
            password:""
        })

        setTimeout(() => {
            Nav("/")
        }, 4000);
    }

  return (
    <div className='signup'>
        
    <form onSubmit={(e)=>e.preventDefault()}>
    <h4>Signup and start learning</h4>
        <div className='authfield'>
            <input type='email' id='mail' name='email' onChange={handleclick}  required />
            <label htmlFor='mail'>Email</label>
        </div>
        <div className='authfield'>
            <input type='password' id='pass' name='password' onChange={handleclick} required />
            <label htmlFor='pass'>Password</label>
        </div>
        <button onClick={()=>signinBtn()} className='subtn'>Sign in</button>
    </form>
    <div className='term'>
        <p>By signing up, you agree to our <span>Terms</span> of Use and <span>Privacy Policy</span>.</p>
    </div>
    <div className='already'>
        <p>Dont have an Account? <span onClick={()=> Nav("/signup")}>Sign up</span></p>
    </div>
    <ToastContainer/>
</div>
  )
}

export default Login