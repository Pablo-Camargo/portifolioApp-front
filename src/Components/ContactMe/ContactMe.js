import React,{useRef} from "react";

import './ContactMe.css';

import emailjs from '@emailjs/browser';

import {HiOutlineMail} from 'react-icons/hi'
import { FaWhatsapp } from "react-icons/fa";
import { Container,Row, Col,Card,Form ,Button} from "react-bootstrap";

export default function ContactMe(){
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qsm0h3a', 'template_d831syt', form.current, 'user_DIl4F325imdav8uEpYo0v')
       e.target.reset()
  };
  return(
    <div className="" id={'contact'}>
    <Container>
      <div>
        <h2 className="contactText">Contact Me </h2>
        
      </div>
      
      
    
        
        
           <Row className="mt-5">
             <Col style={{ textAlign:'center'}} >
             
                <Card className="mb-5 colorCardContact" >
                  <Card.Body>
                    <Card.Title><HiOutlineMail/></Card.Title>
                    <Card.Subtitle className="mb-2 ">E-mail</Card.Subtitle>
                    <Card.Text>pablo.m.c.elias@gmail.com</Card.Text>
                    <a href="mailto:pablo.m.c.elias@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
                  </Card.Body>
                </Card>
                <Card className='colorCardContact mb-5'>
                   <Card.Body>
                    <Card.Title ><FaWhatsapp/></Card.Title>
                    <Card.Subtitle className="mb-2 ">WhatsApp</Card.Subtitle>
                    <Card.Text>+555199578573</Card.Text>
                    <a href="https://api.whatsapp.com/send?phone=555199578573&text=Ola%20dei%20uma%20olhada%20no%20seu%20portifolio" target={'_blank'} rel="noreferrer">Send a message</a>
                  </Card.Body>
                </Card>
                
             </Col>
             <Col>
              <Form ref={form} onSubmit={sendEmail}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control type="email" placeholder="Enter your Email"name="email"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control type="text" placeholder="Enter your Name" name="name" required />
                  
                </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    
                    <Form.Control as="textarea" placeholder="Enter your Message" rows={3} name="message" required/>
                  </Form.Group>
                 
                  <Button variant="primary" type="submit" className="btnSubmit">
                   Let's Talk
                  </Button>
              </Form>
             </Col>
           </Row>
        
      
    </Container>
    </div>



  )
}