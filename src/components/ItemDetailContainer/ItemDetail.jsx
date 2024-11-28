import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

const {addProductInCart} = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = {...product, quantity:count}

    addProductInCart(productCart)
  }

  return (
    <div>
        <div>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Categoria: {product.category}</p>
        <p>Stock = {product.stock}</p>
        <p>ID: {product.id}</p>
        <ItemCount stock={product.stock} addProduct={addProduct}/>
    </div>
    </div>
  )
}

export default ItemDetail