import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";

const App = function () {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <Nav cartItems={cartItems} setCartItems={setCartItems} />
            <Header />
            <Content setCartItems={setCartItems} />
        </>
    );
};

export default App;
