import "./styleItem.css"

export default function Item( {stock} ) {

    return (

        <div className="itemCard"> 
            <div className="imageCard">
                <img src={stock.img} alt={stock.nombre} width="200px" />
            </div>
            <div className="contentCard">
                <div className="priceCard">{"$ " + stock.price}</div>
                <div className="descriptionCard">
                    {stock.name}
                </div>
            </div> 
        </div>
    )
}

