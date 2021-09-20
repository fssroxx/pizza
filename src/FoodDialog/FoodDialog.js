
import styled from "styled-components";
import React from "react";
import {FoodLabel} from "../Menu/FoodGrid";
 import {pizzaRed} from "../styles/colors";
import {Title} from "../styles/title";

const Dialog = styled.div`
    position:fixed;
    width: 500px;
    top: 75px;
    background-color: white;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px; 
    ${({img}) => `background-image: url(${img});`}
    background-position:center;
    background-size: cover;
`

export const DialogContent = styled.div`
    overflow: auto;
    min-height: 100px;
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
`

export const DialogFooter = styled.div`
    box-shadow: 0px -2px 14px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
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
                <DialogContent>

                </DialogContent>
                <DialogFooter>
                    <ConfirmButton>
                        Confirm
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    ): null)
}