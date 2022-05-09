import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import axios from 'axios';
import useToken from '../../../hooks/useToken';


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
    const [token] = useToken(user);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

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
        
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    
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


    const handleLogin = async event => {
        event.preventDefault();
       await signInWithEmailAndPassword(email, password);
       const {data} = await axios.post(' https://enigmatic-oasis-08950.herokuapp.com/login', {email});
       console.log(data);
       localStorage.setItem('accessToken', data.accessToken);
     
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='form-div'>
        <div className='register-form mx-auto'>
            <h1 className='title text-primary text-center mt-2 mb-3'>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" onBlur={handleEmailBlur} name="email" placeholder='Email' required />
                <input type="password" onBlur={handlePasswordBlur} name="password" placeholder='Password' required />
                {
                    errorMessage && 
                    <p className='text-center text-danger'>{errorMessage}</p>
                }
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p className='text-center line'>Don't have any account? <span onClick={navigateRegister} className='text-primary btn btn-link text-decoration-none p-0 mb-1'>Please Register</span></p>
            <p className='text-center line'>Forgot Password?<span className='text-primary btn btn-link text-decoration-none p-0 mb-1' onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default Login;