import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='cards-container'>
    <div className='card'>
        <img src={product.image} alt={product.name} className='card-image'/>
        <div className='card-content'>
        <h2 className='card-title'>{product.name}</h2>
        <p className='card-price'>Precio: ${product.price}</p>

        <Link to ={"/detail/" + product.id}>Ver detalles</Link>
        </div>
    </div>
    </div>
  )
}

export default Item