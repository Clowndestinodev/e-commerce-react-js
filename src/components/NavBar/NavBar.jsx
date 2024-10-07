import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-red">
  <div className="container-flex">
    <a className="navbar-brand" href="#">Tienda de Juegos
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Shooters</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RPG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deportes</a>
        </li>
        <CartWidget/>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar