import { Link, NavLink } from "react-router-dom";
import "../NavBar/styleNavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar () {
    return (
        <nav>
            <div className="navBar">
                <Link to="/" className = "aNavBar">
                    <h1 className="h1NavBar">MDQ STORE</h1>
                </Link> 
                <div className="cart">
                    <CartWidget />
                </div>
            </div>
                <div className="list">
                    <ul>
                        <li><Link to="/category/celulares">Celulares</Link></li>
                        <li><Link to="/category/tablet">Tablets</Link></li>
                        <li><Link to="/category/televisores">TV y Smart</Link></li>
                        <li><Link to="/category/accesorios">Accesorios</Link></li>
                    </ul>
                </div>    
        </nav>
    )
}