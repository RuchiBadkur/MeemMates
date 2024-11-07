import React, { useState } from 'react'
import logo from "../assets/mememates1.png";
import logoText from "../assets/mememates1-2.png";
import { useNavigate } from 'react-router-dom';

const Nav = ({authToken, setShowModal, showModal, setIsSignUp}) => {

  
  const navigate = useNavigate();

  function handleSignUpClick() {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);

  }
  function handleLoginClick() {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(false);
  }

  return (
    <>
        <div className="nav">
          {/* left-nav */}
          <div className="left-nav">
            <img src={logo} alt="logo" className='logo'/>
            <img src={logoText} alt="logo-text" className='logo-text' />
          </div>
          {/* right-nav */}
          <div className="right-nav">
            <button className='btn-grad btn-sign' 
                disabled={showModal}  onClick={handleSignUpClick}>
              {authToken ? "Signout" : "Signup"}
            </button>
            {!authToken && <button className='btn-grad btn-login' disabled={showModal} onClick={handleLoginClick}>Login</button>}
          </div>
          {/* routes */}
          {/* 
            home
            profile icon //dashboard
            edit profile icon //onboarding
           */}
           <div className='nav-links'>
           <button className='btn-grad btn-login' disabled={showModal} onClick={()=>navigate("/")}>Home</button>
           <button className='btn-grad btn-login' disabled={showModal} onClick={()=>navigate("/dashboard")}>Profile</button>
           <button className='btn-grad btn-login' disabled={showModal} onClick={()=>navigate("/onboarding")}>Edit Profile</button>
           </div>
        </div>
    </>
  )
}

export default Nav;