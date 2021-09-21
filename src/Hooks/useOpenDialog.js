import {useState} from "react";

export const useOpenDialog = () => {
    const [openedFood, setOpenedFood] = useState();
    return {
        openedFood,
        setOpenedFood
    }
}
