import React ,{useState} from   'react';
import {Link} from "react-router-dom"
 
 


const SignUp = () => {

const[email,setEmail] =useState("")
const[password,setPassword] = useState("")
const[collegeName,setCollegeName] = useState("")
const[fullName,setFullName] = useState("")
const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handleFullName  = (e) => {
     setFullName(e.target.value)
 }
 const  handleCollegeName  = (e) => {
    setCollegeName(e.target.value)
}


  const signForm = {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dae0e5",
    flexDirection: "column",
  }

    
      const SignUP = () => {
        console.log("submit form")
    }

    return ( 
        <form  style={signForm} action="" onSubmit = {SignUP}>
        <div>
         <label htmlFor="email">Email</label>
         <input type="text"
         style ={{marginLeft:"34px"}}
         name = "emailSignUp"   
         id="emailSignUp" autoComplete="off"
         onChange={handleEmailChange}
         placeholder="Enter your email Address"
         value={email}
         />
     
        </div>
        <div>
         <label style= {{marginLeft:"-24px"}}htmlFor=" passwordSignup">Password</label>
         <input  type=" passwordSignup"
         style= {{marginLeft:"30px"}}
         name = " passwordSignup"   
         id=" passwordSignup" autoComplete="off"
         onChange={handlePasswordChange}
         placeholder="Enter your password"
         value={ password}
         />
     
        </div>
        <div>
         <label style= {{marginLeft:"-31px"}} htmlFor="fullName">FullName</label>
         <input
         style= {{marginLeft:"35px"}} type="text"
         name = "fullName"   
          autoComplete="off"
          placeholder=" Full Name"
          onChange={handleFullName}
         value={fullName}
         />
     
        </div>
        <div>
         <label style= {{marginLeft:"-41px"}} htmlFor="collegeName">CollegeName</label>
         <input style= {{marginLeft:"22px"}} type="text"
         name = "CollegeName"   
          autoComplete="off"
          onChange={handleCollegeName}
         value={collegeName}
         placeholder=" College Name"
         />
     
        </div>
       
     
     
        <button 
         Component= {Link}
         to= "/singup"
        className="btn-login" type="submit" >SignUp</button>
     
             </form>
     );
}
 
 export default SignUp;