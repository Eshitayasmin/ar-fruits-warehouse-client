import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      
      if(user){
        navigate('/');
      }

      if(loading){
        return <Loading></Loading>
      }

      let errorMessage;
      if(error){
           errorMessage = <p className='error-message'>{error.message}</p>
      }
      else{
          errorMessage ='';
      }
   
    const handleRegister = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;

      if(password === confirmPassword){
        createUserWithEmailAndPassword(email, password);
      }
      else{
        toast("two password didn't match");
      }
    }
      
    const navigateLogin = () =>{
         navigate('/login');
    }
    return (
      <div className='form-div'>
        <div className='register-form mx-auto'>
            <h1 className='title text-primary text-center mt-3 mb-3'>Register</h1>
            <form onSubmit={handleRegister}>
            <input type="text" name="name" placeholder='Name' required />
            <input type="email" name="email" placeholder='Email' required />
            <input type="password" name="password" placeholder='Password' required />
            <input type="password" name="confirmPassword" placeholder='Confirm Password' required />
            {
              errorMessage && 
              <p>{errorMessage}</p>
            }
            <input className='submit-btn' type="submit" value="Register" />
            </form>

            <p className='text-center'>Already have an account? <span onClick={navigateLogin} className='text-primary btn btn-link text-decoration-none p-0 mb-1'>Please Login</span></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default Register;