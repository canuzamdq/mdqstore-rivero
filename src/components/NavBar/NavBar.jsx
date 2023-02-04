import "../NavBar/style.css"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/mdqstore-logo.png"


export default function NavBar () {
    return (
        <nav>
            <div className="navBar">
                <a href="#"><img src={ logo } /></a> 
                <CartWidget /> 
            </div>
                <div className="list">
                    <ul>
                        <li><a href="#">Celulares</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">TV y Smart</a></li>
                        <li><a href="#">Accesorios</a></li>
                    </ul>
                </div>    
        </nav>
    )
}