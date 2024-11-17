import CartWidget from "./CartWidget"
import "./navbar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="brand"> 
          <Link to="/">God Of Games</Link>
      <ul >
        <li>
          <Link to="/category/shooters">Shooters</Link>
        </li>
        <li >
          <Link to="/category/rpg">Rpg</Link>
        </li>
        <li >
          <Link to="/category/deportes">Deportes</Link>
        </li>
        <CartWidget/>
      </ul>
</nav>
    )
}

export default NavBar