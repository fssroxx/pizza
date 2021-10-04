
import styled from 'styled-components';
import {DialogContent, DialogFooter, ConfirmButton, getPrice} from "../FoodDialog/FoodDialog";
import React from "react";
import {formatPrice} from "../Data/FoodData";
import {useToppings} from "../Hooks/useToppings";

const OrderStyled = styled.div`
    position: fixed;
    right: 0;
    top: 48px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    box-shadow: 4px 0px 5px 4px grey;
    z-index: 10;
    display: flex;
    flex-direction: column;
`

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`

const OrderContainer = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid gray;
    ${({editable}) => editable ? `
       &:hover {
       cursor: pointer;
       background-color: #e7e7e7;
       }
    `
    : 
    `
        pointer-events: none;
    `}
    
    
`

const OrderItem = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`

const DetailItem = styled.div`
    color: gray;
    font-size: 10px;
`

export function Order({orders, setOrders, setOpenedFood, setDisplay}) {
    const toppings = useToppings()
    const subTotal = orders.reduce((total, order) => {
            return total + getPrice(order)
        }, 0)

    const tax = subTotal * 0.07;
    const total = subTotal + tax;

    const deleteItem = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }
    return (
        <OrderStyled>
                {orders.length === 0 ? (<OrderContent>
                        Your order's looking pretty empty.</OrderContent> )
                    : (<OrderContent>
                        <OrderContainer> Your order is: </OrderContainer>
                        {orders.map((order, index) =>
                            <OrderContainer editable key={index}>
                                <OrderItem
                                    onClick={() => setOpenedFood({...order, index})}>
                                    <div> {order.quantity} </div>
                                    <div> {order.name} </div>
                                    <div style={{cursor:"pointer"}}
                                          onClick={ (e) => {
                                        e.stopPropagation();
                                        deleteItem(index);
                                    }} >🗑️</div>
                                    <div>{formatPrice(getPrice(order))}</div>
                                </OrderItem>
                                <DetailItem>
                                    {order.toppings
                                        .filter(t => t.checked)
                                        .map(topping => topping.name)
                                        .join(', ')
                                    }
                                </DetailItem>
                                {order.choice && <DetailItem>{order.choice}</DetailItem>}
                            </OrderContainer> )}
                            <OrderContainer>
                                <OrderItem>
                                    <div>Sub-Total</div>
                                    <div>{formatPrice(subTotal)}</div>
                                </OrderItem>
                                <OrderItem>
                                    <div>Tax</div>
                                    <div>{formatPrice(tax)}</div>
                                </OrderItem>
                                <OrderItem>
                                    <div>Total</div>
                                    <div>{formatPrice(total)}</div>
                                </OrderItem>
                            </OrderContainer>
                    </OrderContent>)
                    }
            <DialogFooter>
                <ConfirmButton onClick={() => setDisplay('block')}>
                    Checkout
                </ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}