import "../ItemListContainer/style.css";
import ItemList from "../ItemList/ItemList";
import { product } from "../../data/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; /* Hook que recibe los prámetros de Routes */

export default function ItemListContainter () {
    const [stockList, setStockList] = useState([]); /* almacena de forma global product */
    const { categoryID } = useParams() /* categoryID viene del parametro de App.jsx */
    const getProducts = new Promise((resolve, reject) => {

        if (categoryID){
            const productsFiltred = product.filter((item) => item.category === categoryID)
            setTimeout(() => {
                resolve(productsFiltred); 
            }, 3000)
        } else {
            setTimeout(() => {
                resolve(product); 
            }, 3000);

        }
        
    });

    useEffect (()=>{
        getProducts
        .then((res) => {
            setStockList(res) /* asigna product que viene de la promesa */

        })
        .catch( (error) => {
            console.log(error)
        })
    }, [categoryID]) /* es el "disparador" del useEfect */

    return <div className="container"><div className="subcontainer"><ItemList stock={ stockList } /></div></div>
}

