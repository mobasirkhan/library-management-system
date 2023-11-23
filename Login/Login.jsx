import React, { useState } from 'react'
import './LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
    const [userLogin,SetUserLogin]=useState({
        Username:"",
        Password:""
    })
    const login=((e)=>{
        e.preventDefault();
        const lr={...userLogin}
        const Username=lr.Username
        const Password=lr.Password

            const data={Username,Password}
            console.log(data)
            rs()
            async function rs() {
                let ft=await fetch(`http://localhost:8080/login/${data.Username}/${data.Password}`,{
                    method:"get",
                    headers:{"Content-Type":"application/json"}, 
                })
                let jsf=await ft.json();
                const roles=jsf.role
                
                if (roles==='true') {
                    navigate('/admin')
                } else {
                    navigate('/home')
                
                
            }
           
        }
    })
    const lchange=((e)=>{
        const name=e.target.name
        const value=e.target.value
        // console.log(name , value)
        SetUserLogin({...userLogin, [name]:value})
    })

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>


        <form onSubmit={login}>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor="text">Username</label>
            <input type="text" placeholder='Enter Email' className='form-control'  value={userLogin.Username} onChange={lchange} name='Username' />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' value={userLogin.Password} onChange={lchange} name='Password' />
          </div>

          {/*<div className='mb-2'>
            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
            <label htmlFor="check" className='custom-input-label ms-2'>
              Remember me
            </label>
            </div>*/}

          <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>

          </div>
          <p className='text-end mt-2'>
            Forgot <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign up</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login

