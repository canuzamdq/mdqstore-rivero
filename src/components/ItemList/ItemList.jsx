import "./style.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

export default function ItemList( {stock} ) {
    return (
        <div className="itemList">
            { stock.map((item) => ( /* return implícito */
                <div key={item.id}>
                    <Link to= {`/item/${item.id}`}>
                        <Item stock = { item } />
                    </Link>
                </div>
            )
            
            )}
        </div>
    )
}
