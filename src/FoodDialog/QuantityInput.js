import styled from "styled-components";
import React from "react";
import {Title} from "../styles/title";
import {pizzaRed} from "../styles/colors";

const QuantityInputStyled = styled.input`
    font-size: 18px;
    width: 24px;
    text-align: center;
    border: none;
    outline: none;
    
`

const IncrementContainer = styled(Title)`
    display: flex;
    height: 24px;
`
const IncrementButton = styled.div`
    width: 23px;
    color: ${pizzaRed};
    text-align: center;
    cursor: pointer;
    padding: -12px;
    margin: 0 10px;
    border: 1px solid ${pizzaRed};
    ${({ disabled }) => disabled && 
    `opacity: 0.5;
     pointer-events: none;
    `}
&:hover{
    background-color: #ffe3e3;
} 
    
`

export function QuantityInput({quantity}) {
    const increment = () => {
        quantity.setValue(s => s + 1)
    }
    const decrement = () => {
        quantity.setValue(s => s - 1)
    }
    return <IncrementContainer>
        <div>Quantity:</div>
        <IncrementButton disabled={+quantity.value === 1} onClick={decrement}>-</IncrementButton>
        <QuantityInputStyled  {...quantity}/>
        <IncrementButton onClick={increment}>+</IncrementButton>
    </IncrementContainer>
}