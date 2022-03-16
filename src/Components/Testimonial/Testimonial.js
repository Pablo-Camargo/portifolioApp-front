import React , { useEffect, useState,useRef }from "react";
import {Formik, Form, Field, ErrorMessage } from 'formik';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


import * as yup from 'yup';
import Axios from 'axios';
import './Testimonial.css';

import { Container,Button,Row, Col} from "react-bootstrap";

export default function Testimonial(){
  const CustomInputComponent = (props) => (
   <textarea className="my-custom-input" type="text"{... props} />
 );
  const handleSubmit = (values) => {
    console.log(values);
    Axios.post("http://localhost:3000/comentario", {
      nome:values.nome, 
      comentario:values.comentario
    }).then((response)=> {
      console.log(response)
    })
    console.log(values);
  }
  const [comentarios, setData] = useState([]);
  const carousel =useRef(null);

  const hendleLeftClick = (e) =>{
    e.preventDefault();
     
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const hendleRightClick = (e) =>{
    e.preventDefault();
     
      carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
  const getComentarios = () =>{
    const local = process.env.DB_HOST || 'http://localhost:3000/'
     
       Axios.get( local + "comentario")
       .then((res)=> {
      console.log(res.data);
      setData(res.data)
    })
  }
  useEffect(()=>{
    getComentarios();
  },[])
  const validadeMessage = yup.object().shape({
    comentario: yup.string().required(),
    nome: yup.string().min(5).required(),
  });
  return(
    <Container id='testimonial'>
      <Row>
        <Col className="formulario-content">
         <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validadeMessage}>
            <Form className="testimonialForm">
              <div className="formGroup">
                <Field name='nome'type="text" className="formField" placeholder='Yor Name'/>
                
              </div>
              <div className="erros">
                <ErrorMessage component='span'
                name='nome'
                className='formErro'/>
              </div>
              <div className="formGroup">
                <Field as={CustomInputComponent}  name='comentario' className="formField" placeholder='Yor Massage'/>
              
              </div>
              <div className="error">
                <ErrorMessage component='span'
                name='comentario'
                className='formErro'/>
              </div>
              <Button  type="submit">Send Message </Button>
            </Form>
        </Formik>
        </Col>
        <Col>
        <div >
          <h3>Testemonial</h3>
          <div className="card-content-coment">
            <div className="items-wrapper" >
              <div className="buttons">
                  <BsChevronLeft onClick={hendleLeftClick} className="letftButton"/>
                  <BsChevronRight onClick={hendleRightClick}  className="rightButton"/>

              </div>
              <div className="items" ref={carousel}>
               {comentarios.map(coment =>(
                <div key={coment.id}>
                 <span>{coment.nome}</span>
                  <p>{coment.comentario}</p>
               </div> 
              ))}
                
              </div>
            </div>
          
          </div>
        </div>
        
        </Col>
      </Row>
     

    </Container>
  )
}