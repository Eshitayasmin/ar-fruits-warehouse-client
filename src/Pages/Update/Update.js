import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useFruitDetail from '../../hooks/useFruitDetail';
import taka from '../../images/taka.png';
import './Update.css';

const Update = () => {
    const { id } = useParams();
    const [fruitDetail] = useFruitDetail(id);
    const [quantity, setQuantity] = useState('');
    const [sold, setSold] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
  

  
    
    const handleDelivered = () => {
       if(fruitDetail.quantity > 0){
        fruitDetail.quantity = fruitDetail.quantity - 1;
        setQuantity(fruitDetail.quantity);
        setSold('');
        
       }

       if(fruitDetail.quantity === 0){
        setSold('sold out');
    }

       
    }

    
 
   

    const handleRestock = () =>{
       const restockQuantity = document.getElementById('restock-field').value;
       fruitDetail.quantity = parseInt(fruitDetail.quantity) + parseInt(restockQuantity);
       setQuantity(fruitDetail.quantity);

        // console.log(data);
        const url = `https://enigmatic-oasis-08950.herokuapp.com/inventory/${id}`;
       

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
               
            });
       
        

       document.getElementById('restock-field').value = "";
    }
     


   


    return (
              
                <div className='update-item mx-auto'>
                <div>
                    <img className='update-item-image' src={fruitDetail.img} alt="" />
                </div>
                <div>
                    <h3>{fruitDetail.name}</h3>
                    <p>{fruitDetail.description}</p>
                    <p><small>Supplier: {fruitDetail.supplierName}</small></p>
                    <h6>Price: <img className='taka-icon' src={taka} alt="" /> <span className='mt-3 px-0'>{fruitDetail.price}</span></h6>
                    <h6>Quantity: {fruitDetail.quantity}</h6>
                     <p className='text-danger p-0 sold'>{sold}</p>
                    <button onClick={handleDelivered} className='mt-3 my-2 delivery-btn'>Delivered</button>
                   <div>
                   <input id="restock-field" className='me-3 mb-2' type="number" placeholder='Restock quantity'/>
                    <button type='submit' onClick={handleRestock} className='restock-btn'>Restock</button>
                   </div>

                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="restock-field" className='me-3 mb-2' placeholder='Restock quantity' type="number" {...register("quantity")} />
                    <input onClick={handleRestock} className='restock-btn' type="submit" value="Restock" />
                </form>  */}
                </div>
                
            </div>

            
    );
};

export default Update;