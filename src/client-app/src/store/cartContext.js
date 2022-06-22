import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: undefined,
    isCartHidden: true,
    setIsCartHidden: undefined,
    toggleCart: undefined,
    cartItemsTotalPrice: 0
});

export const CartContextProvider = function ({ children }) {
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
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
