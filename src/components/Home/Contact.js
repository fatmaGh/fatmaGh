import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import arrow from '../images/arrow.png'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import { Form } from 'react-bootstrap'

const Arrow = styled.div`
    margin-left: 15px;
    height: 16px;
    width: 16px;
    background-image: url(${arrow});
`;

const Para = styled.p`
    font-family: 'Arima Madurai', cursive;
    width: 70%;
    margin: 2% auto;
    color: white;
    font-size: 1.3em;
    line-height: 1.5em;
    letter-spacing: 0.8px;
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Arima Madurai', cursive;
    font-weight: 500;
    font-size: 2.5em;
    color: White;
    letter-spacing: 2px;
    text-align: center;
`; 

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio_template', e.target, 'user_7W7UySXuEozvW4ECGAmXf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', margin:'0 auto'}}>
            <div data-aos='fade-left' style={{flexBasis:'50%', marginTop:'6%'}}>
                <Title>Contact Me </Title>
                <Para>
                            If you want to collaborate you are very welcome to contact me.
                        I am available for freelance projects and full-time employment.
                </Para>
            </div>
            <Form onSubmit={sendEmail} data-aos='fade-right' style={{flexBasis:'50%', marginTop:'-4%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    {/* <Form.Label  style={{fontFamily:'Arima Madurai, cursive', color:'white', fontSize:'1.3em', paddingLeft:'2%'}}>Subject</Form.Label> */}
                    <Form.Control placeholder='Subject' style={{fontFamily:'Arima Madurai, cursive', fontSize:'1.3em', paddingLeft:'2%'}} type="text" name="subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    {/* <Form.Label style={{fontFamily:'Arima Madurai, cursive', color:'white', fontSize:'1.3em', paddingLeft:'2%'}}>Name</Form.Label> */}
                    <Form.Control placeholder='Name'  style={{fontFamily:'Arima Madurai, cursive', fontSize:'1.3em', paddingLeft:'2%'}} type="text" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    {/* <Form.Label style={{fontFamily:'Arima Madurai, cursive', color:'white', fontSize:'1.3em', paddingLeft:'2%'}}>Email address</Form.Label> */}
                    <Form.Control placeholder='Email' style={{fontFamily:'Arima Madurai, cursive', fontSize:'1.3em', paddingLeft:'2%'}} type="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label style={{fontFamily:'Arima Madurai, cursive', color:'white', fontSize:'1.3em', paddingLeft:'2%'}}>Message</Form.Label> */}
                    <Form.Control placeholder='Message' style={{fontFamily:'Arima Madurai, cursive', fontSize:'1.3em', paddingLeft:'2%'}} as="textarea" rows={3} name="message" />
                </Form.Group>
                <Form.Group>
                    <button className="button" role="button" type="submit" style={{zIndex:'20', color:'gray', padding:'calc(.875rem - 1px) calc(1.5rem - 1px)'}}>Send<Arrow></Arrow></button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Contact
