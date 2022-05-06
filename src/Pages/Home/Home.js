import React from 'react';
import Items from '../Items/Items';

import './Home.css';

const Home = () => {
  

    return (
        <div>
            <div className='backround-image w-100'>
                <div>
                <h1 className='text-center backround-title'>Welcome to AR Fruits Warehouse</h1>
                </div>
            </div>
            <Items></Items>
        </div>
    );
};

export default Home;