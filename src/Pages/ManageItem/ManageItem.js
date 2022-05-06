import React from 'react';
import './ManageItem.css';

const ManageItem = ({fruit, handleDelete}) => {
    const {_id, name, img, price, quantity, supplierName} = fruit;
 
   
    return (
        <div className='manage-item'>
            <img className='manage-image' src={img} alt="" />
           <div className='mx-3'>
           <h4>{name}</h4>
            <p>Supplier: {supplierName}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
           </div>
            
            <button onClick={() => handleDelete(_id)} className='delete-btn w-100'>Delete</button>
        </div>
    );
};

export default ManageItem;