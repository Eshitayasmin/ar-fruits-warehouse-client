import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() =>{
        const getMyItem = async() =>{
            const email = user?.email;
            const url = `https://enigmatic-oasis-08950.herokuapp.com/myitem?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data);
        }
        getMyItem();

    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to want to delete this item?');
        if(proceed){
            const url = `https://enigmatic-oasis-08950.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myItems.filter(fruit => fruit._id !== id);
                setMyItems(remaining);
            })
        }
    }
        return (
            <div className="my-items">
            {
                myItems.map(myItem =><MyItem 
                    key={myItem._id}
                    myItem={myItem}
                    handleDelete={handleDelete}></MyItem>)
            }
            </div>
        
    );
};

export default MyItems;