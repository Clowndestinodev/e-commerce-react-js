import { useEffect, useState } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import "./Itemlistcontainer.css"


const ItemListContainer = ({greeting}) => {
const [products, setProducts]= useState([])
const {idCategory} = useParams()

useEffect(()=>{
    getProducts()
    .then((data)=>{
        if(idCategory){
            const filterProducts = data.filter ((product)=> product.category === idCategory)
            setProducts(filterProducts)
        }else{
            setProducts(data)
        }
        
    })
    .catch((error)=>{
        console.error(error)
    })
    .finally(()=>{
        console.log("finalizo la promesa")
        
    })
},[idCategory])




    return(
        <div className="item-list-container">
            {greeting}
            <ItemList products={products}/>
            </div>
    )
}

export default ItemListContainer