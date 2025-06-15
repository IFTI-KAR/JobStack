import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/job-finder-logo-vector.jpg";
import userlogo from "../assets/userlogo.png";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";


const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogOut=()=>{
     //   console.log("user trying to Logout")
        logOut().then(()=>{
            alert("your Logged out succesfully")
        }).catch((error)=>{
            //console.log(error)
        })
    }
  return (
    <div className="w-11/12 mx-auto px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Jobstack Logo" className="h-6 w-6" />
        <span className="text-xl font-bold">Jobstack</span>
      </Link>

      {/* Middle: Nav Links */}
      <div className="flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-medium text-green-600" : ""
          }
        >
          Home
        </NavLink>
        <a href="/#companies" className="font-medium text-green-600 hover:underline">
  Jobs
</a>
        <NavLink
          to="/pages"
          className="font-medium text-green-600" 
          
        >
          Pages
        </NavLink>
        <NavLink
          to="/contact"
          className= "font-medium text-green-600" 
        >
          Contact
        </NavLink>
      </div>

      {/* Right: Always show user logo and Login button */}
      <div className="flex items-center gap-4">
        <Link to={"/myprofile"} >
          <img
            src={user?.photoURL || userlogo}
            alt="User"
            className="w-8 h-8 rounded-full border border-green-400"
          />
        </Link>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {user && user.email}
        </div>
          {
            user ? <button onClick={handleLogOut} className="btn bg-red-600">Logout</button> : <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link>
          }
        
      </div>
    </div>
  );
};

export default Navbar;
