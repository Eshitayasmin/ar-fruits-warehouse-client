import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import taka from '../../images/taka.png';
import './Update.css';

const Update = () => {
    const {id} = useParams();
    const [updateItem, setUpdateItem] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setUpdateItem(data));
    }, [id]);


    return (
        <div>
             <div className='update-item w-50 mx-auto'>
            <img className='update-item-image' src={updateItem.img} alt="" />
            <h3>{updateItem.name}</h3>
            <p>{updateItem.description}</p>
            <h6>Price: <img className='taka-icon' src={taka} alt="" /> <span className='mt-3 px-0'>{updateItem.price}</span></h6>
            <p>Quantity: {updateItem.quantity}</p>
            <p><small>Supplier: {updateItem.supplierName}</small></p>
            
        </div>
        </div>
    );
};

export default Update;