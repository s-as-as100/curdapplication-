import React from "react";
import { useState} from "react";
import users from "./../user";
import authService from "./../authService";
 
 
const SignIn = (props) => {
    if (authService.isLoggedIn()) {
        props.history.push("/dashboard");
      }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const isValidUser = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

   const submitLoginForm = (e) => {
    e.preventDefault();

    // let hardCodeCred = {
    //   email: "kaif@gmail.com",
    //   password: "kaif1234",
    // };

    if (isValidUser(email, password)) {
        authService.doLogin(email);
        props.history.push("/dashboard");
      } else {
      alert(" wrong email or password");
    }

    console.log("submit form");
  };

  const mystyle = {
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
    
   
  };

  const loginStyle = {
    padding: "0px 10px ",
     
  };

  const signUp = {
    padding: "0px 10px ",
    marginLeft: "4px",
  };
  const pasStyle = {
    marginLeft: " -24px",
  };

  return (
    <form style={mystyle} action="" onSubmit={submitLoginForm}>
      <div className="lgn">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Enter your email"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className="lgn btn">
        <label style={pasStyle} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          id="password"
          autoComplete="off"
          value={password}
        />
      </div>
      <div>
      <button style={loginStyle} type="submit">
          Login
        </button>
      <button
      onClick= {() => props.history.push("/signup")}
      style={signUp} >
          SignUp
        </button>
        
        
      </div>

      
    </form>
    
  );
};
export default SignIn;
