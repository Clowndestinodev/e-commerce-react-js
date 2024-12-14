import CartWidget from "./CartWidget"
import "./navbar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="brand"> 
          <Link to="/">Tienda De Pipo</Link>
      <ul >
        <li>
          <Link to="/category/Shonen">Shonen</Link>
        </li>
        <li >
          <Link to="/category/Seinen">Seinen</Link>
        </li>
        <li >
          <Link to="/category/Comics">Comics</Link>
        </li>
        <CartWidget/>
      </ul>
</nav>
    )
}

export default NavBar