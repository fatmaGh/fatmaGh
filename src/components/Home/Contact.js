import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import arrow from '../images/arrow.png'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <h1 className='title'>Contact Me </h1>
                <div className='para'>
                            If you want to collaborate you are very welcome to contact me.
                        I am available for freelance projects and full-time employment.
                </div>
            </div>
            <Form onSubmit={sendEmail} data-aos='fade-right' style={{flexBasis:'50%', marginTop:'-4%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control placeholder='Subject' className='form' type="text" name="subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control placeholder='Name' className='form' type="text" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control placeholder='Email' className='form' type="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control placeholder='Message' className='form' as="textarea" rows={3} name="message" />
                </Form.Group>
                <Form.Group>
                    <button className="button send-button" role="button" type="submit">Send<img alt='arrow' className='arrow' src={arrow} /></button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Contact
