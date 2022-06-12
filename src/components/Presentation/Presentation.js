import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    font-family: 'Arima Madurai', cursive;
    /* font-family: 'Marcellus', serif; */
    /* font-family: 'Poiret One', cursive; */
    /* width: 80%; */
    line-height: 1.6em;
    font-weight: 500;
    font-size: 1.5em;
    color: #FF5151;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 0 auto 1.5% auto;
`; 

const Presentation = () => {
    return (
        <Title style={{margin:'3%'}}>
            Hello, I'm <Link to='/about' style={{color:'#3d5a80', fontWeight:'500', textDecoration:'none'}}> Fatma Gharsallah </Link>
            Freelance Web Designer & Full Stack Developer based in Tunisia.
            Experienced in designing & developing custom websites.
        </Title>
    )
}

export default Presentation
