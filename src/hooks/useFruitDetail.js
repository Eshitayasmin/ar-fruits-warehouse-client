import { useEffect, useState } from "react";

const useFruitDetail = id =>{
    const [fruitDetail, setFruitDetail] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setFruitDetail(data));
    }, [id]);
    return [fruitDetail, setFruitDetail];
}
export default useFruitDetail;