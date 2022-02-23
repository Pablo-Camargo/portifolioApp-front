import React from "react";
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Container,Button} from "react-bootstrap";

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
    <Container>
      <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validadeMessage}>
        <Form className="testimonialForm">
          <div className="formGroup">
            <Field name='name'type="text" className="formField" placeHolder='Yor Name'/>
            <ErrorMessage component='span'
            name='name'
            className='formErro'/>
          </div>
          <div className="formGroup">
            <Field as={CustomInputComponent}  name='text' className="formField" placeHolder='Yor Massage'/>
            <ErrorMessage component='span'
            name='text'
            className='formErro'/>
          </div>
          <Button  type="submit">Let's Talk</Button>
        </Form>
      </Formik>

    </Container>
  )
}