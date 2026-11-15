import React from 'react'
import {useState} from 'react';


const Form = () => {
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmpassword, setConfirmPassword] = useState();

    const handlesubmit = (event) =>{
        event.preventDefault();

        if(name && email && password && confirmpassword){
            if(password === confirmpassword){
              alert("sign up successfully");  
            }else{
                alert("Err :Password and confirmpassword must be same !");
            }
            
        }else{
            alert("all field are mandatory")
        }

    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <p className='heading'>signup</p>
            <div>
                <p className='fieldName'>Name</p>
                <input type='text' onChange={(event)=>setName(event.target.value)}/>
                <p className='data'>{name ? "": "Name is required"}</p>
            </div>
             <div>
                <p className='fieldName'>Email</p>
                <input type='email' onChange={(event)=>setEmail(event.target.value)}/>
                <p className='data'>{email ? "": "eamil is required"}</p>
            </div>
             <div>
                <p className='fieldName'>Password</p>
                <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                <p className='data'>{password ? "": "password is required"}</p>
            </div>
             <div>
                <p className='fieldName'>Confirm Password</p>
                <input type='password' onChange={(event)=>setConfirmPassword(event.target.value)}/>
                <p className='data'>{confirmpassword ? "": "password must be same as password"}</p>
            </div>
            <div>
                <button>signup</button>
            </div>
        </form>
    </div>
  )
}

export default Form