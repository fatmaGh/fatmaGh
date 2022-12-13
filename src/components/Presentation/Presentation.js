import React from 'react'
import { Link } from 'react-router-dom'
import './Presentation.css'


const Presentation = () => {
    return (
        <h1 className='presentation-title'>
            Hello, I'm <Link to='/resume' className='name-link'> Fatma Gharsallah </Link>
            Freelance Web Designer & Full Stack Developer based in Tunisia.
            Experienced in designing & developing custom websites.
        </h1>
    )
}

export default Presentation
