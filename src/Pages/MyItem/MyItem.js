import React from 'react';
import { useNavigate } from 'react-router-dom';
import taka from '../../images/taka.png';

const MyItem = ({ myItem, handleDelete }) => {
    const { name, img, price, quantity, supplierName, _id } = myItem;
    const navigate = useNavigate();

    const navigateAddItem = () => {
        navigate('/addItem')
    }
    return (
        <div className="form-div">
            <div className='manage-item'>
                <img className='manage-image' src={img} alt="" />
                <div className='mx-3'>
                    <h4>{name}</h4>
                    <p>Supplier: {supplierName}</p>
                    <p>Price: <img className='taka-icon' src={taka} alt="" /> <span className='mt-3 p-0'>{price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <button onClick={() => handleDelete(_id)} className='delete-btn'>Delete</button>
                    <button onClick={navigateAddItem} className='add-item-btn'>Add Item</button>

                </div>

            </div>
        </div>
    );
};

export default MyItem;