import Card from "./Card";
import contentStyles from "../styles/Content.module.css";
import cardStyles from "../styles/Card.module.css";

const Content = function () {
    return (
        <section className={contentStyles['app-content']}>
            <Card customClass={cardStyles['card--y-translated']}>
                <h1>A Nice Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero animi, unde amet nam sit incidunt quo corporis molestiae eos. Nostrum repellat velit veniam libero nam debitis quia reprehenderit itaque!
                Quae, reprehenderit minus perferendis voluptatibus cupiditate rem harum. Quaerat, temporibus vel. Voluptate suscipit eveniet dignissimos ipsam. Sed a officiis, voluptates deserunt impedit tempore qui consectetur possimus tempora. Delectus, quisquam veniam!</p>
            </Card>
        </section>
    );
};

export default Content;
