import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFruitDetail from '../../hooks/useFruitDetail';
import taka from '../../images/taka.png';
import './Update.css';

const Update = () => {
    const { id } = useParams();
    const [fruitDetail] = useFruitDetail(id);
    const { name, price, quantity, img, supplierName, description } = fruitDetail;

    const [number, setNumber] = useState(true);


    const handleDelivered = () => {
        let newQuantity = quantity - 1;
    }



    return (
         
                <div className='update-item mx-auto'>
                <div>
                    <img className='update-item-image' src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p><small>Supplier: {supplierName}</small></p>
                    <h6>Price: <img className='taka-icon' src={taka} alt="" /> <span className='mt-3 px-0'>{price}</span></h6>
                    <h6>Quantity: {quantity}</h6>
                    <button onClick={handleDelivered} className='mt-3 my-2 delivery-btn'>Delivered</button>
                   <div>
                   <input className='me-3 mb-2' type="number" placeholder='Restock quantity'/>
                    <button className='restock-btn'>Restock</button>
                   </div>
                </div>
            </div>
          
    );
};

export default Update;