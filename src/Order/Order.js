
import styled from 'styled-components';
import {DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import React from "react";

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
`

const OrderItem = styled.div`
    padding: 10px 0;
`

export function Order({orders}) {

    return (
        <OrderStyled>
                {orders.length === 0 ? (<OrderContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eum</OrderContent> )
                    : (<OrderContent>
                        <OrderContainer> Your order is: </OrderContainer>
                        {orders.map((order, i) => <OrderContainer key={i}> <OrderItem> {order.name} </OrderItem> </OrderContainer> )}
                    </OrderContent>)
                    }
            <DialogFooter>
                <ConfirmButton>
                    Checkout
                </ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}