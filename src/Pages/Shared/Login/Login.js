import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    if (loading || sending) {
        return <Loading></Loading>
    }
    
    
    let errorMessage;
    if(error || resetError){
         errorMessage = <p className='error-message'>{error ? error.message : resetError.message}</p>
    }
    else{
        errorMessage ='';
    }


    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast('Please provide your email address')
        }
    }


    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='register-form w-50 mx-auto'>
            <h1 className='title text-primary text-center mt-2 mb-3'>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" onBlur={handleEmailBlur} name="email" placeholder='Email' required />
                <input type="password" onBlur={handlePasswordBlur} name="password" placeholder='Password' required />
                {
                    errorMessage && 
                    <p>{errorMessage}</p>
                }
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p className='text-center line'>Don't have any account? <span onClick={navigateRegister} className='text-primary btn btn-link text-decoration-none p-0 mb-1'>Please Register</span></p>
            <p className='text-center line'>Forgot Password?<span className='text-primary btn btn-link text-decoration-none p-0 mb-1' onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;