import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemsDetailsContainer = () => {

const { id } = useParams() /*id viene del objeto useParams "desestructurado" */
const [detailObjet, setDetailObjet] = useState({})

const getProduct = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const productFind = product.find (item => item.id == id)
        resolve(productFind)
    }, 0)
})

useEffect (()=>{
    getProduct
    .then(response => { 
        setDetailObjet(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    
}, [])

    return (
        <div><ItemDetail detail={detailObjet} /></div>
    )
}

export default ItemsDetailsContainer;