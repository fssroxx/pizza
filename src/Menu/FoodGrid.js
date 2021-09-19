import styled from "styled-components";
import {Title} from "../styles/title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    `

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgb(255 255 255 / 80%);;
    padding: 5px;
`

export const Food = styled(Title)`
    height:100px;
    padding:10px;
    font-size: 20px;
    border-radius: 11px;
    box-shadow: 1px 0px 7px 1px black;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    &:hover {
    cursor: pointer;
    opacity: 0.7;
    }
`