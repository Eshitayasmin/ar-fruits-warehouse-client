import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItem = ({myItem, handleDelete}) => {
    const {name, img, price, quantity, supplierName, _id} = myItem;
    const navigate = useNavigate();

    const navigateAddItem = () =>{
        navigate('/addItem')
    }
    return (
        <div className='manage-item'>
            <img className='manage-image' src={img} alt="" />
           <div className='mx-3'>
           <h4>{name}</h4>
            <p>Supplier: {supplierName}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleDelete(_id)} className='delete-btn'>Delete</button>
            <button onClick={navigateAddItem} className='add-item-btn'>Add Item</button>
            
           </div>
            
        </div>
    );
};

export default MyItem;