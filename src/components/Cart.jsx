import Card from "./Card";

const Cart = function ({ foodName }) {
    return (
        <Card>
            <h1>{foodName}</h1>
        </Card>
    );
};

export default Cart;
