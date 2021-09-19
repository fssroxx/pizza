import React from 'react';
import styled from "styled-components";
import {pizzaRed} from "../styles/colors";
import {Title} from "../styles/title";
import {Banner} from "../Banner/Banner";

export const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index:999;
    `

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 4px -3px 0px #972828;
    
`

export function Navbar() {
    return <NavbarStyled>
        <Logo>
            Pizza by FssRoxx 🍕
        </Logo>

    </NavbarStyled>
}