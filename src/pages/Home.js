import React from 'react'
import { useState } from 'react';

import AuthModal from '../components/AuthModal';
import Nav from '../components/Nav';

import memeVid from '../assets/mememates_light.mp4'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const authToken = false;


  return (
    <>
      <div className='home'>
        <div className="video-background">
          {
            !showModal &&
            <video autoPlay loop muted>
              <source src={memeVid} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
          }
        </div>
        <div className="content-wrapper">
          {/* navbar */}
          <Nav authToken={authToken} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>

          {/* AuthModal */}
          {
            showModal && <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
          }
        </div>
      </div>
    </>
  )
}

export default Home;