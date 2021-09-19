import styled from "styled-components";
import {Title} from "../styles/title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    `

export const FoodLabel = styled(Title)`
    position: absolute;
    background-color: rgb(255 255 255 / 80%);;
    padding: 5px;
`

export const Food = styled.div`
    height:100px;
    padding:10px;
    font-size: 20px;
    border-radius: 11px;
    box-shadow: 0px 0px 0px 0px grey;
    margin-top: 5px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    &:hover {
        cursor: pointer;
        margin-top: 0px;
        margin-bottom: 5px;
        box-shadow: 1px 0px 7px 1px grey;
        filter: contrast(100%);
    }
`
//! падинг боттом чтобы не скакали карточки снизу