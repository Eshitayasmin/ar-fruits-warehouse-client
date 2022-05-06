import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    const navigateHome = () =>{
        navigate('/');
    }
    return (
        <div className='not-found'>
           <h1 className='text-danger text-center'>404</h1>
           <h4 className='text-center'>Page Not Found</h4>
            <p onClick={navigateHome} className='text-center'><Link className='text-center' to="/">Go Back Home</Link></p>
           
        </div>
    );
};

export default NotFound;