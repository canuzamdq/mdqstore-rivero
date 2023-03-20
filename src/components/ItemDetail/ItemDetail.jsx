import "./style.css"
import swal from "sweetalert";
import ItemCount from "../Counter/ItemCount"
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ( {detail} )  => {

    const navigate = useNavigate()
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(1)
    
    useEffect(() => {
        setCount(detail?.stock === 0 ? 0 : 1)
    
    }, [detail])
    

    return (
        <div className="detailContainer">
            <div className="detailSubContainer">
                <div className="detailImg">
                    <img src= {`/images/${detail.img}`} alt={detail.name} width="450px"/>
                </div>
                <div className="detailDescription">
                    <h2>{detail.name}</h2>
                    <h3>$ {detail.price}</h3>
                    <ItemCount count ={count} setCount={setCount} stock={detail.stock} />
                    <button 
                        className ="btnAddToCart" 
                        disabled= {count > detail.stock || detail.stock === 0} 
                        onClick= {()=> {addItem( detail, count )
                            swal({text: "Se agregó el producto al carrito", icon:"success", buttons: false, timer: 3000})
                        }}
                    >
                        Agragar al Carrito
                        
                    </button>
                    <button className ="btnAddToCart" onClick= {()=> navigate('/')} >Seguir comprando</button>
                    <button className ="btnAddToCart" onClick= {()=> navigate('/cart')} >Finalizar compra</button>
                    <h4>{detail.description}</h4>
                    
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail