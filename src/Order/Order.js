
import styled from 'styled-components';
import {DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

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

export function Order() {
    return (
        <OrderStyled>
            <OrderContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eum?
            </OrderContent>
            <DialogFooter>
                <ConfirmButton>
                    Checkout
                </ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}