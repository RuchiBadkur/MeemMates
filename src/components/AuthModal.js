import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthModal = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log(email, password, confirmPassword);
    

    function handleClick(){
        console.log("close showmodal clicked");
        setShowModal(false);
    }
    

    function handleSubmit(e){
        e.preventDefault();
        try {
            if(isSignUp && password !== confirmPassword){
                setError("Passwords need to match!")
            }
            console.log("make a post request to our database");
            //if isSignUp && navigate to onboarding page
            isSignUp && navigate("/onboarding");
            // navigate to dashboard page
            !isSignUp && navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <div className='auth-container'>
            <div className='auth-modal'>
                <div onClick={handleClick} className='btn-grad close-icon'>x</div>
                <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
                <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                <form onSubmit={handleSubmit} className='auth-form'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        required={true}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        required={true}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {
                        isSignUp && 
                        <input
                            type='password'
                            id='password-check'
                            name='password-check'
                            placeholder='confirm password'
                            required={true}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    }
                    <input
                        className='btn-secondary' 
                        type='submit'
                    />
                </form>
                    <p>{error}</p>
                    <hr />
                    <h2>GET THE APP</h2>
            </div>
        </div>
    </>
  )
}

export default AuthModal