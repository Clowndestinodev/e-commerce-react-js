import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Cart = () => {
    const {cart, totalPrice,deleteProductById,deleteCart} = useContext(CartContext)


  return (
    <div>
        <h2>Productos en el carrito</h2>
        {
            cart.map((productCart)=>(
    <div key={productCart.id}>
        <img src={productCart.image} width={200} alt="" />
        <p>{productCart.name}</p>
        <p>Cantidad: {productCart.quantity}</p>
        <p>Precio c/u: {productCart.price}</p>
        <p>Precio Parcial: {productCart.quantity * productCart.price}</p>

        <button onClick={deleteProductById(productCart.id)}>Borrar Producto</button>
    </div>
            ))
        }

        <p>Precio Total:{totalPrice}</p>
        <button onClick={deleteCart}>Borrar Carrito</button>
    </div>
  )
}

export default Cart