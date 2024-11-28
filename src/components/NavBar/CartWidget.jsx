import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to="/cart"className="cartwidget">
            <PiShoppingCartSimpleFill className="icon-cart" />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget