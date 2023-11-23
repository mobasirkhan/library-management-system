import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate=useNavigate();
    const [userSignin,SetUserSignin]=useState({
                Username:"",
                Email:"",
                Password:""
                // check:"false"
            })
    const Signin=((e)=>{
        e.preventDefault();
        const sr={...userSignin}  // spreadOperator
        const username=sr.Username
        const email=sr.Email
        const password=sr.Password
        // for user login we use false if admin login then it will be true also we add admin by-default
        const role=false    
            const data={username,email,password,role}
            console.log(data)
            fetch('http://localhost:8080/api/post',{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            }).then(()=>{
                // console.log("sent")
                navigate("/")
            }).catch((e)=>{
                console.log(e)
            })
        
    })

    const schange=((e)=>{
        const name=e.target.name
        const value=e.target.value
        SetUserSignin({...userSignin, [name]:value}) // spread Operator
    })

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>


        <form onSubmit={Signin}>
          <h3 className='text-center'>Sign Up</h3>
          {/* <div className='mb-2'>
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder='Enter First Name' className='form-control' />
          </div> */}
          <div className='mb-2'>
            <label htmlFor="lname">Username</label>
            <input type="text" placeholder='Enter Last Name' className='form-control' value={userSignin.Username} onChange={schange} name='Username'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' value={userSignin.Email} onChange={schange} name='Email' />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' value={userSignin.Password} onChange={schange} name='Password' />  
          </div>

          <div className='d-grid mt-2'>
            <button className='btn btn-primary'>Sign Up</button>

          </div>
          <p className='text-end mt-2'>
            Already Registerd <Link to="/" className='ms-2'>Sign in</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Signup
