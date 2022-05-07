import { useEffect, useState } from "react";

const useFruitDetail = id =>{
    const [fruitDetail, setFruitDetail] = useState({});

    useEffect(() =>{
        fetch(`https://enigmatic-oasis-08950.herokuapp.com/inventory/${id}`)
        .then(res => res.json())
        .then(data => setFruitDetail(data));
    }, [id]);
    return [fruitDetail, setFruitDetail];
}
export default useFruitDetail;