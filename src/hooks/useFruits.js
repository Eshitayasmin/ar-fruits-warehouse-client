import { useEffect, useState } from "react"

const useFruits = () =>{
    const [fruits, setFruits] = useState([]);

    useEffect(() =>{
        fetch('https://enigmatic-oasis-08950.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setFruits(data))
    }, []);
    return [fruits, setFruits];
}

export default useFruits;
