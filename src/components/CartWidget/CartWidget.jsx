import "../CartWidget/style.css"
import iconCart from "../CartWidget/carrito-de-compras.png"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = ()=> {
    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((prev, current) => prev + current.quantity, 0 ))
    }, [cart])
    return (
        <Link to={'/cart'}>
             <div className="cart"><img className="imgCart"src={iconCart} alt="iconCart"/><div className={cart?.length > 0 ? "item" : "noItem"}>{ cart?.length === 0 ? " " : total }</div></div>
        </Link>
    ) 
}

export default CartWidget;