import React from 'react';
import useFruits from '../../hooks/useFruits';
import ManageItem from '../ManageItem/ManageItem';
import './ManageInventory.css';

const ManageInventory = () => {
    const [fruits, setFruits] = useFruits();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to want to delete this item?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = fruits.filter(fruit => fruit._id !== id);
                setFruits(remaining);
            })
        }
    }
    return (
        <div>
            <div className='manage-inventory'>
                {
                    fruits.map(fruit => <ManageItem
                        key={fruit._id}
                        fruit={fruit}
                        handleDelete={handleDelete}></ManageItem>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;