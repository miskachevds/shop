import { FaCartShopping } from "react-icons/fa6";
import React,{ useState} from "react";

function Header(){
    let[cartOpen, setCartOpen] = useState(false);

    return(
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                 {cartOpen && (
                    <div className="shop-cart">
                        
                    </div>
                 )}   
            </div>
            <div className="presentation"></div>
        </header>
    )
}

export default Header;