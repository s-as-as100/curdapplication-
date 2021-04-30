import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import authService from "./../authService";
const Navbar = (props) => {
 
  const logout = () =>{
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    props.history.push("/signin");
     
     
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/" to="/dashboard">
            Details
                   </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        

        <Link className="btn btn-outline-light" to="/users/add">Add Student</Link>
        {/* <button className="btn btn-outline-light" onClick = {() => {logout()}} >Logout</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
