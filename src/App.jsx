import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart/Cart'
import { CartContext, CartProvider } from './context/CartContext'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>

      <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a A la tienda De Pipo"} />} />
      <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a A la tienda De Pipo"} />}/>
      <Route path="/detail/:idProduct"  element={ <ItemDetailContainer />} />
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
