import {useEffect} from "react";


export const useTitle = ({openedFood, orders}) => {
    useEffect(() => {
        if (openedFood){
            document.title = openedFood.name;
        } else {
            document.title = orders.length === 0 ? "What's for dinner?" : `[${orders.length}] items in your order!` ;
        }
    })
}