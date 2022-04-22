import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import CartContext from "./store/cartContext";

const App = function () {
    const [cartItems, setCartItems] = useState([]);
    const [isCartHidden, setIsCartHidden] = useState(true);
    const cartItemsTotalPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);

    const toggleCart = function () {
        setIsCartHidden(!isCartHidden);
        document.body.classList.toggle('no-overflow');
    };

    const contextValue = {
        cartItems,
        setCartItems,
        isCartHidden,
        setIsCartHidden,
        toggleCart,
        cartItemsTotalPrice
    };

    return (
        <CartContext.Provider value={contextValue} >
            <Nav />
            <Header />
            <Content />
        </CartContext.Provider>
    );
};

export default App;
