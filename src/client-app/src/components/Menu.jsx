import { useCallback, useEffect, useState } from "react";
import { number } from "prop-types";
import Card from "./Card";
import MenuItem from "./MenuItem";
import cardStyles from "../styles/Card.module.css";

const API_URL = 'http://localhost:5000/api/dish'

const Menu = ({ componentYOffset }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [dishes, setDishes] = useState([]);
    
    const fetchDishesAsync = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Error while fetching ${API_URL}.`);
            }
            const dishes = await response.json();
            setDishes(dishes);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchDishesAsync();
    }, [fetchDishesAsync]);

    return (
        <Card
            customClass={`${cardStyles[`card--y-${componentYOffset}px-translated`]} ${cardStyles['card--less-padding']}`}
        >
            {isLoading ?
            <div>Loading</div> : 
            dishes.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        inputId={item.id}
                        food={item.name}
                        description={item.description}
                        price={item.price}
                    />
                );
            })}
        </Card>
    );
};

Menu.propTypes = {
    componentYOffset: number.isRequired
};

export default Menu;
