import React from 'react';
import styled from 'styled-components';
import {foods} from '../Data/FoodData';
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";

const MenuStyled = styled.div`
height: 1000px;
margin: 0px 400px 50px 20px;
`

export function Menu({setOpenedFood}) {
return <MenuStyled>
    {/*todo концепция заключается в том, что нам приходит отсортированный по категориям объект ( не массив обратить внимание) с Object.entries мы делаем из него массив где каждый */}
    {Object.entries(foods).map(([selectionName, foods]) => (
        <>
          <h1 key={selectionName}> {selectionName} </h1>
          <FoodGrid>
            {foods.map(food =>
                <Food
                    img={food.img}
                    key={food.name}
                    onClick={() => setOpenedFood(food)}
                >
                  <FoodLabel>
                    {food.name}
                  </FoodLabel>
                </Food>)}
          </FoodGrid>
        </>
    ))}

</MenuStyled>
}