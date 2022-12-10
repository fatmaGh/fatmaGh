import React, { useState } from 'react'
import Social from './Social'
import styled from 'styled-components'

const StyledBurger = styled.div`
    height: 3.5rem;
    width: 5rem;
    position: fixed;
    top: 3%;
    right: 0.5%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    border-radius: 50%;
    cursor: pointer;
    z-index: 20;    
    
    div {
        border-radius: 50%;
        background-color: ${({open}) => open ? 'white' : '#3d5a80'};
        width: 3.5rem;
        height: 0.5rem;
        border-radius: 10px;
        z-index: -1;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
        
    }
`;

const Burger = () => {
    const[open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Social open={open}/>
        </>
    )
}

export default Burger
