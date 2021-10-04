
import styled from "styled-components";
import React from "react";
import {FoodLabel} from "../Menu/FoodGrid";
 import {pizzaRed} from "../styles/colors";
import {Title} from "../styles/title";
import {formatPrice} from "../Data/FoodData";
import {QuantityInput} from "./QuantityInput";
import {useQuantity} from "../Hooks/useQuantity";
import {Toppings} from "./Toppings";
import {useToppings} from "../Hooks/useToppings";
import {Choices} from "./Choises";
import {useChoice} from "../Hooks/useChoice";


export const Dialog = styled.div`
    position:fixed;
    width: 500px;
    top: 75px;
    background-color: white;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 400px);
    display: flex;
    flex-direction: column;
`

export const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px; 
    ${({img}) => `background-image: url(${img});`}
    background-position:center;
    background-size: cover;
`

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0 40px;
    padding-bottom: 80px;
`

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed}
    ${({disabled}) => disabled &&
    `
    opacity: .5;
    background-color: grey;
    pointer-events: none;
    `
}
`

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 14px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`

export const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`
export const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    padding: 5px 40px;
    font-size: 30px;
`;

const pricePerTopping = 0.5;

export const getPrice = (order) => {
    return (order.price + (order.toppings.filter(topping => topping.checked).length * pricePerTopping)) * order.quantity
}
//* сюда передаем openedFood
//* который отображает открытую
//* карточку со всеми параметрами,
//* соответственном там есть и поле section
//* топпинги будут только у пиццы

function hasToppings(food) {
     return food.section === 'Pizza'
}

function FoodDialogContainer({openedFood, setOpenedFood, setOrders, orders}) {
    const quantity = useQuantity();

    const toppings = useToppings(openedFood.toppings);
    const choiceRadio = useChoice(openedFood.choice);
    const isEditing = openedFood.index > -1;

    function close() {
        setOpenedFood()
    };


    const order = {
        ...openedFood ,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    }
    //* функция для редактирования заказа
    function editOrder() {
        const newOrders = [...orders];
        newOrders[openedFood.index] = order;
        setOrders(newOrders);
        close();
    }
    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }


    return  (
        <>
            <DialogShadow onClick={close}/>
            <Dialog>
                <DialogBanner img={openedFood.img}>
                    <DialogBannerName>{openedFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}/>
                    {hasToppings(openedFood) && <>
                        <h3>Would U like toppings?</h3>
                        <Toppings {...toppings}/>

                    </>}
                    {openedFood.choices && <Choices openFood={openedFood} choiceRadio={choiceRadio}/>}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={isEditing ? editOrder : addToOrder}
                        disabled={openedFood.choices && !choiceRadio.value}
                    >
                        {isEditing ? `Update order ` : `Add to order `}
                        {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export function FoodDialog(props) {
    if(!props.openedFood) return null;
    return <FoodDialogContainer {...props}/>
}