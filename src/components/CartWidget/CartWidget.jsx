import "../CartWidget/style.css"
import cart from "../CartWidget/carrito-de-compras.png"
export default function CartWidget() {
    return (
        <span className="cart"><img className="imgCart"src={cart}/><div className="item">2</div></span>
    )
}