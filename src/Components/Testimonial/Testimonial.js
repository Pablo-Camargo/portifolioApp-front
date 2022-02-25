import React from "react";
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './Testimonial.css'

import { Container,Button,Row, Col,Card} from "react-bootstrap";

export default function Testimonial(){
  const CustomInputComponent = (props) => (
   <textarea className="my-custom-input" type="text"{... props} />
 );
  const handleSubmit = (values) => console.log(values);
  const validadeMessage = yup.object().shape({
    text: yup.string().required(),
    name: yup.string().min(5).required(),
  });
  return(
    <Container id='testimonial'>
      <Row>
        <Col className="formulario-content">
         <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validadeMessage}>
        <Form className="testimonialForm">
          <div className="formGroup">
            <Field name='name'type="text" className="formField" placeHolder='Yor Name'/>
            
          </div>
          <div className="erros">
            <ErrorMessage component='span'
            name='name'
            className='formErro'/>
          </div>
          <div className="formGroup">
            <Field as={CustomInputComponent}  name='text' className="formField" placeHolder='Yor Massage'/>
           
          </div>
          <div className="error">
             <ErrorMessage component='span'
            name='text'
            className='formErro'/>
          </div>
          <Button  type="submit">Let's Talk</Button>
        </Form>
        </Formik>
        </Col>
        <Col>
        <div >
          <h3>Testemonial</h3>
          <Card className="card-content-coment">
            <div className="resp-iner">
              <span>Nome</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus porro eveniet inventore quod. Porro architecto ratione eveniet ipsum dignissimos optio distinctio labore nostrum numquam sed, maiores voluptatibus ex amet.</p>
            </div>
          
          </Card>
        </div>
        
        </Col>
      </Row>
     

    </Container>
  )
}