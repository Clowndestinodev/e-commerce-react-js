import React from 'react'

const ItemDetail = ({product}) => {
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
    </div>
    </div>
  )
}

export default ItemDetail