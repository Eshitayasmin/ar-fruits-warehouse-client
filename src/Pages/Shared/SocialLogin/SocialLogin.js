import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from '../Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        navigate('/home');
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='or-section w-100'>
                <div className='border-line'></div>
                <p className='or px-2'>or</p>
                <div className='border-line'></div>
            </div>
            <div className='social-btn-section w-100'>
            <button onClick={() => signInWithGoogle()}
                    className='social-btn mx-auto'>
                    <img className='logo' src={google} alt="" />
                    <span className='px-1'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;