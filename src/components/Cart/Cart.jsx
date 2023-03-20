import "../Cart/style.css";
import swal from "sweetalert";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext)
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const navigate = useNavigate()
    

  const createOrder = (event) => {
    event.preventDefault()
    if (!formValue.name || !formValue.phone || !formValue.email){
      swal({text:"Debe completar todos los campos", icon: "warning"})
    }else {
    const db = getFirestore()
    const querySnapshot = collection(db, "orders")
      
    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone
      },
      products: cart.map((product) => {
        return {
          id: product.id,
          brand: product.brand,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: product.quantity
        }
      }), 
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity , 0)
    })
    .then((response) => {

      swal({text: `Orden con ID ${response.id} ha sido creada con éxito.`, icon:"success"})
      updateStock(db)
      clear()
      event.preventDefault(navigate('/'))
    })
    .catch((error) => console.log(error))
    }
  }

  const updateStock = (db) => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id)

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity
      })
      .then(() => {
        // se actualiza el stock en firebase
      })
      .catch((error) => console.log(error))
    })
  }

  const handleImput = (event) => {
    setFormValue({...formValue, 
    [event.target.name]: event.target.value
    })
  }

  return (
    <div className="mainContainer">
      <div className="cartContainer"> <h1>Carrito de compras</h1>
        {cart.map((product)=>(
          <div  key={product.id}className="sndContainer">
            <div key={product.id} className="product">
              <table>
                <tr key ={product.id} className="trCart">
                  <td className="tdCart"><img src={`/images/${product.image}`} alt={product.name} width="60px" /></td>
                  <td className="tdName"><p>{product.name}</p></td>
                  <td className="tdCart"><p>{product.quantity}</p></td>
                  <td className="tdCart"><p>${product.price}</p></td>
                  <td className="tdCart"><p>${(product.price * product.quantity)}</p></td>
                  <td className="tdCart"><button className="trasher" onClick ={() => removeItem(product.id)}><img src="/images/trasher.png" width="20px" alt="trasher"/></button></td>
                </tr>
              </table>
            </div>
          </div>
    
        ))}
        {cart.length > 0 && <div className="section">
            
            <div className="btnCart">
              <button className="btnAddToCart" onClick={clear}>Vaciar Carrito</button>
              <button className="btnAddToCart" onClick={()=> navigate('/')}>Seguir comprando</button>
            </div>
        </div>}

        {cart.length === 0  && <div className="emptyCart">
            <h2>No hay productos en el carrito</h2>
            <button onClick={()=> navigate('/')} className="btnAddToCart">Seguir comprando</button>
          </div>
          }

      </div>
        
            {cart.length > 0 && 
              <div className="submitCart">
                <h1>Checkout</h1>
                <div>
                  <form className="inputs">
                    <input className="fields" name="name"  placeholder="Nombre" value={formValue.name} onChange={handleImput} />
                    <input className="fields" name="phone"  type='text' placeholder="Teléfono" value={formValue.phone} onChange={handleImput}/>
                    <input className="fields" name="email" type="email" placeholder="Email" value={formValue.email} onChange={handleImput}/>
                  </form>
              
                </div>
                <div className="total"><h3>Total de la compra: ${cart.reduce((acc, curr) => acc + curr.price * curr.quantity , 0)}</h3></div>
                <div className="btnCart">
                  <button onClick={createOrder} className="btnAddToCart">Finalizar compra</button>
                </div>
              </div>
            }
    </div>
  
    
  )
} 

export default Cart;
