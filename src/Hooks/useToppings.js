import {useState} from "react";


export function useToppings(defaultToppings) {
    const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings());

    function checkTopping(index) {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }

    return {
        checkTopping,
        toppings
    }
}

    const toppingsList = [
        "Extra Cheese",
        "Pepperoni",
        "Sausage",
        "Onions",
        "Peppers",
        "Pineapple",
        "Ham",
        "Spinach",
        "Artichokes",
        "Mushrooms",
        "Anchovies"
    ];

    //* возвращаем новый массив в котором каждый топпинг имеет структуру {имя, чекед}
    function getDefaultToppings() {
        return toppingsList.map(topping => ({
            name: topping,
            checked: false
        })
        )
    }

