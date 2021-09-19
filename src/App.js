import React, {useState} from 'react';
import {Navbar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {GlobalStyle} from "./styles/GlobalStyles";
import {FoodDialog} from "./FoodDialog/FoodDialog";


const App = () => {
    const [openedFood, setOpenedFood] = useState();
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <FoodDialog openedFood={openedFood} setOpenedFood={setOpenedFood}/>
            <Menu setOpenedFood={setOpenedFood}/>
        </>
    );
};

export default App;