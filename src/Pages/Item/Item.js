import React from 'react';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png';
import './Item.css';

const Item = ({fruit}) => {
    const {_id, name, img, price, description, quantity, supplierName} = fruit;
    const navigate = useNavigate();

    const navigateUpdate = (id) => {
         navigate(`/update/${id}`)
    }
    
    return (
        <div className='item'>
            <img className='item-image' src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h6>Price: <img className='taka-icon' src={taka} alt="" /> <span className='mt-3 px-0'>{price}</span></h6>
            <p>Quantity: {quantity}</p>
            <p><small>Supplier: {supplierName}</small></p>
            <button onClick={() => navigateUpdate(_id)} className='w-100 update-btn'>Update</button>
          
        </div>
    );
};

export default Item;