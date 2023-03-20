import "../ItemListContainer/style.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; /* Hook que recibe los prámetros de Routes */
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainter () {
    const [stockList, setStockList] = useState([]); /* almacena de forma global product */
    const { categoryID } = useParams() /* categoryID viene del parametro de App.jsx */


    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'products')
        const querySnapshot = categoryID
            ? query(queryBase, where("category", "==", categoryID))
            : queryBase

            getDocs(querySnapshot)
            .then((response)=>{
                const list = response.docs.map((doc) => {
                    return {
                        id: doc.id, ...doc.data(),
                    }
                })
                setStockList(list)
            })
            .catch((error)=> console.log(error))
        } 


    useEffect (()=>{
        getProducts()
    }, [categoryID]) 

    return <div className="container"><div className="subcontainer"><ItemList stock={ stockList } /></div></div>
}

