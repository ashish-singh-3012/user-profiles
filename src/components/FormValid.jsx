import React from 'react';
import {useState} from 'react';

const FormValid =() =>{

const[name , setName] = useState();
const[fathername, setFatherName] = useState();
const[mobilenumber, setMobileNumber] = useState();
const[email, setEmail] = useState();
const[address, setAddress] = useState();
const[city, setCity] = useState();
const[role, setRole] = useState();

const handlesubmit = (e) => {
    e.preventDefault();
    
    if(name && fathername && mobilenumber && email && address && city && role ){
       alert("Form submitted successfully");  
        }else{
            alert("all field are mandatory")
        }

}
return(
<>
<div>
    <form onSubmit={handlesubmit}>
       <p className='heading'>Registration Form</p>


            <div>
                <p className='fieldName'>Name</p>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <p className='data'>{name ? "": "Name is required"}</p>
            </div>

            <div>
                <p className='fieldName'>Fathername</p>
                <input type='text' onChange={(e)=>setFatherName(e.target.value)}/>
                <p className='data'>{fathername ? "": "Father name is required"}</p>
            </div>
            
            <div>
                <p className='fieldName'>MobileNumber</p>
                <input type='text' onChange={(e)=>setMobileNumber(e.target.value)}/>
                <p className='data'>{mobilenumber ? "": "Mobile number is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Email</p>
                <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
                <p className='data'>{email ? "": "Email is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Address</p>
                <input type='text' onChange={(e)=>setAddress(e.target.value)}/>
                <p className='data'>{address ? "": "Address is required"}</p>
            </div>
            <div>
                <p className='fieldName'>City</p>
                <input type='text' onChange={(e)=>setCity(e.target.value)}/>
                <p className='data'>{city ? "": "City is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Role</p>
                <input type='text' onChange={(e)=>setRole(e.target.value)}/>
                <p className='data'>{role ? "": "Role is required"}</p>
            </div>
            <div>
                <button>Submit</button>
            </div>
    </form>
</div>
</>
)}
export default FormValid;