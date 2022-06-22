import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import { CartContextProvider } from "./store/cartContext";

const App = function () {
    return (
        <CartContextProvider>
            <Nav />
            <Header />
            <Content />
        </CartContextProvider>
    );
};

export default App;
