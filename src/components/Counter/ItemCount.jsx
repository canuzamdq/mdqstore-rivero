import "./style.css"


export default function ItemCount( {count, setCount, stock}) {


  function stockAdd() {
    setCount(count +1)
    
  }

  function stockSubtract(){
    setCount(count -1)

  }

  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button className ="btnCounter" disabled={count <= 1} onClick={stockSubtract}>-</button>
        <div className="count">{count}</div>
        <button className ="btnCounter" disabled={count === stock} onClick={stockAdd}>+</button>
      </div>
        <div className ="productStock">Cantidad disponible: {stock}</div>
    </div>
  )
}


