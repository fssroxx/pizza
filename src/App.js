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

const App = () => {
    const openedDialog = useOpenDialog();
    const orders = useOrders();
    useTitle({...openedDialog, ...orders});

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <Order {...orders}/>
            <FoodDialog {...openedDialog} {...orders}/>
            <Menu {...openedDialog}/>
        </>
    );
};

export default App;