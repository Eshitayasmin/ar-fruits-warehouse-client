import React from 'react';
import { useNavigate } from 'react-router-dom';
import Items from '../Items/Items';

import './Home.css';

const Home = () => {
    const navigate = useNavigate();
  const handleContactSubmit = event =>{
      event.preventDefault();
      navigate('/welcome');
  }

    return (
        <div>
            <div className='backround-image w-100'>
                <div><h1 className='text-center backround-title'>Welcome to AR Fruits Warehouse</h1></div>
                <p></p>
            </div>
            
            <Items></Items>
            <div className='extra-one'>
                <h3 className='mb-4 text-center'>Our Responsibility</h3>
                <p> We are convinced that a high level of social responsibility is in the best interest of all stakeholders in the production chain; from growers to consumers and we also believe that these high standards deserve our moral and financial support.</p>
            </div>
            <div className='contact-section'>
                <div>
                   <img src="https://about.crunchbase.com/wp-content/uploads/2021/03/Community_FAQ-1.svg" alt="" />
                </div>
                <div>
                <h1 className='text-primary mt-3'>Contact Us</h1>
                <p className='text-warning'>If you have any questions, please feel free to contact us</p>
                 <form className='contact-form' onSubmit={handleContactSubmit}>
                     <input className='field' type="text" placeholder='Name' required/>
                     <input className='field' type="email" name="email" placeholder='Email' required/>
                     <textarea className='field' name="" id="" cols="25" rows="3" placeholder='Your Question' required></textarea>
                     <input className='ms-2 contact-submit-btn' type="submit" value="Submit" />
                 </form>
                </div>
            </div>
        </div>
    );
};

export default Home;