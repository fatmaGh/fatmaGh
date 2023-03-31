import React from 'react'
import Menu from './Menu'
import Burger from './Burger'
import styled from 'styled-components'

const TopBar = styled.div`
    height: 15%;
    width: 90%;
    display: flex;   
    margin: 0 auto ;
    justify-content: space-evenly;  
`;

const Header = () => {
    return (
        <TopBar>
            <Menu/>
            <Burger/>
        </TopBar>
    )
}

export default Header
