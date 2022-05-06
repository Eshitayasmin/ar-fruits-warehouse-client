import React from 'react';
import useFruits from '../../hooks/useFruits';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [fruits] = useFruits(); 
    return (
        <div>
            <div className='fruits'>
              <div className='fruits'>
              {
                    fruits.slice(0, 6).map(fruit => <Item fruit={fruit}></Item>)
                }
              </div> 
        </div>
        </div>
    );
};

export default Items;