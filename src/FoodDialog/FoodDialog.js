
import styled from "styled-components";
import React from "react";
import {FoodLabel} from "../Menu/FoodGrid";

const Dialog = styled.div`
    position:fixed;
    height: 2000px;
    width: 500px;
    top: 75px;
    background-color: white;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    
`

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px; 
    ${({img}) => `background-image: url(${img});`}
    background-position:center;
    background-size: cover;
`

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`
const DialogBannerName = styled(FoodLabel)`
    top: 100px;
    padding: 5px 40px;
    font-size: 30px;
`;

export function FoodDialog({openedFood, setOpenedFood}) {
    const close = () => setOpenedFood()
    return (openedFood ? (
        <>
            <DialogShadow onClick={close}/>
            <Dialog>
                <DialogBanner img={openedFood.img}>
                    <DialogBannerName>{openedFood.name}</DialogBannerName>
                </DialogBanner>

            </Dialog>
        </>
    ): null)
}