import React from 'react';
import {Navbar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {GlobalStyle} from "./styles/GlobalStyles";
import {FoodDialog} from "./FoodDialog/FoodDialog";
import {Order} from "./Order/Order";
import {useOpenDialog} from "./Hooks/useOpenDialog";
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";
import {MadeBy} from "./Menu/MadeByFssRoxx";
import {useMadeBy} from "./Hooks/useMadeBy";

const App = () => {
    const openedDialog = useOpenDialog();
    const orders = useOrders();
    useTitle({...openedDialog, ...orders});
    const display = useMadeBy();

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <Order {...orders} {...openedDialog} {...display}/>
            <FoodDialog {...openedDialog} {...orders}/>
            <MadeBy {...display}/>
            <Menu {...openedDialog}/>
        </>
    );
};

export default App;