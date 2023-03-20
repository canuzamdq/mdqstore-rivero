import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemsDetailsContainer = () => {

const { id } = useParams() /*id viene del objeto useParams "desestructurado" */
const [detailObjet, setDetailObjet] = useState({})


const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);

    getDoc(querySnapshot)
        .then((res) => {
            setDetailObjet({
                id: res.id, ...res.data()
            })
        })
        .catch((error) => console.log(error))
}

useEffect (()=>{
    getProducts()
    
}, [])

    return (
        <div><ItemDetail detail={detailObjet} /></div>
    )
}

export default ItemsDetailsContainer;