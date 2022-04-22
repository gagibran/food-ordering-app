import { createPortal } from "react-dom";
import CartOverlay from "./CartOverlay";
import CartWindow from "./CartWindow";

const Cart = function () {
    return createPortal(
        <>
            <CartOverlay />
            <CartWindow />
        </>,
        document.getElementById('appModals')
    );
};

export default Cart;
