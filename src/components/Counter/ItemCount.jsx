import "./style.css"
import { useState, useEffect } from 'react'


export default function ItemCount( {stock}) {

  const [count, setCount] = useState(1)

  useEffect(() => {
    if (count === {stock}) {
      alert(`Cantidad máxima permitda ${stock}`)
    }
  },[count])

  function stockAdd() {
    setCount(count +1)
    
  }

  function stockSubtract(){
    setCount(count -1)

  }

  return (
    <div className="itemCountContainer">
      <div className="itemCount">
        <button className ="btnCounter" disabled={count === 1} onClick={stockSubtract}>-</button>
        <div className="count">{count}</div>
        <button className ="btnCounter" disabled={count === stock} onClick={stockAdd}>+</button>
      </div>
        <div className ="productStock">Cantidad disponible {stock}</div>
        <button className ="btnAddToCart" onClick= {() => {alert(`Se agregaron ${count} productos al carrito`)}} >Comprar ahora</button>
      
    </div>
  )
}


