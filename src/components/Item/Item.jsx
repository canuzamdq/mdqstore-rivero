import "./styleItem.css"

export default function Item( {stock} ) {

    return (

        <div className="itemCard"> 
            <div className="imageCard">
                <img src= {`/images/${stock.img}`} alt={stock.name} width="200px" />
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

