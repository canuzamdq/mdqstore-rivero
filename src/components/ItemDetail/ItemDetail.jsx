import "./style.css"
import ItemCount from "../Counter/ItemCount"

const ItemDetail = ( {detail} )  => {
    return (
        <div className="detailContainer">
            <div className="detailSubContainer">
                <div className="detailImg">
                    <img src={detail.img} alt={detail.name} width="450px"/>
                </div>
                <div className="detailDescription">
                    <h2>{detail.name}</h2>
                    <h3>$ {detail.price}</h3>
                    <ItemCount stock={detail.stock} />
                    <h4>{detail.description}</h4>
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail