import React,{useState} from 'react'
import './Email.css'


function Email(){
  
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[error,setError]=useState(false);

    const handleChange=(e)=>
    {
      e.preventDefault()
      if(Name.length===0 || Email.length===0 || Password.length===0)
      {
        
        setError(true)
        


      }
      
        console.log(Name,Email,Number);
    }
    return (
     

        <div className='container'>
<form  onSubmit={handleChange}   >
 

        <div className="font">Enter your username </div>
       <input type="text"  className='box' onChange={e=>setName(e.target.value)} ></input><br />

       <div className='label'>
        {error && Name.length===0 ? <label>Please enter your name</label> : ""}</div>


        <div className="font"> Enter your email</div>
       <input type="email" className='box' onChange={e=>setEmail(e.target.value)} ></input>    


       <div className='label'>
       {error && Email.length===0 ? <label>Please enter your Email</label> : ""}</div>
       <br />

       <div className="font">Enter your password</div>
       <input  type="password" className='box' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"onChange={e=>setPassword(e.target.value)} ></input>


       <div className='label'>
       {error && Password.length===0 ? <label>Please enter your Password</label> : ""}</div>
       
       <br /><br />
       
      <br />
      {/* <div className='hide1'>`</div><div className='hide'> */}
       <button type='submit' className='button' onClick={""}>Submit</button>
        {/* </div><br /><br/> */}
        
        </form>
         </div>


      
    )
  }
       
        


      

export default Email