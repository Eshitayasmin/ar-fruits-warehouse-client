import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import './AddItem.css';
import auth from '../../firebase.init';
import { useNavigate} from 'react-router-dom';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
        const url = `https://enigmatic-oasis-08950.herokuapp.com/inventory`;
       

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('This item is added');
                reset();
               
            });
       
            
    };
    return (
        <div className='form-div'>
             <h4 className='add-title'>Add A Item</h4>
            <div className='mx-auto add-section'>
                <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 p-1' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3 p-1' placeholder='Supplier Name' {...register("supplierName")} />
                    <input className='mb-3 p-1' placeholder='Price' {...register("price")} />
                    <input className='mb-3 p-1' placeholder='quantity' type="number" {...register("quantity")} />
                    <input className='mb-3 p-1' placeholder='Photo Url' {...register("img")} />
                    <input className='mb-3 p-1' value={user.email} {...register("email")} readOnly/>
                    <input className='add-item-btn' type="submit" value="Add Item" />
                </form>
            </div> 
        </div>
    );
};

export default AddItem;