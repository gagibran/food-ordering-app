import { createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    setCartItems: undefined,
    isCartHidden: true,
    setIsCartHidden: undefined,
    toggleCart: undefined,
    cartItemsTotalPrice: 0
});

export default CartContext;