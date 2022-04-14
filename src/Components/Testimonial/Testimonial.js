import React, { useEffect, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import * as yup from "yup";
import Axios from "axios";
import "./Testimonial.css";

import { Container, Button, Row, Col } from "react-bootstrap";

export default function Testimonial() {
    const CustomInputComponent = (props) => (
        <textarea className="my-custom-input" type="text" {...props} />
    );
    const newSubmit = (values, onSubmitProps) => {
        Axios.post("https://bancodopablo.herokuapp.com/comentario", {
            nome: values.nome,
            comentario: values.comentario,
        }).then((response) => {
            onSubmitProps.resetForm();
            const msgs = response.data.msg;

            Swal.fire({
                width: 600,
                padding: "3em",
                color: "#fff",
                background: "#2c2c6c",
                icon: "success",
                title: msgs,
                showConfirmButton: false,
                timer: 1500,
            });
            getComentarios();
        });
    };
    const [comentarios, setData] = useState([]);

    const carousel = useRef(null);

    const hendleLeftClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const hendleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    const getComentarios = () => {
        Axios.get("https://bancodopablo.herokuapp.com/comentario").then(
            (res) => {
                console.log(res.data);
                setData(res.data);
            }
        );
    };
    useEffect(() => {
        getComentarios();
    }, []);
    const validadeMessage = yup.object().shape({
        comentario: yup.string().required(),
        nome: yup.string().min(5).required(),
    });
    return (
        <div id={"testimonial"}>
            <Container>
                <h3>Testemonial</h3>
                <Row>
                    <Col sm={6}>
                        <div className="formulario-content">
                            <Formik
                                initialValues={{
                                    nome: "",
                                    comentario: "",
                                }}
                                onSubmit={newSubmit}
                                validationSchema={validadeMessage}
                            >
                                <Form
                                    className="testimonialForm"
                                    action="/comentario"
                                    method="POST"
                                >
                                    <div className="formGroup">
                                        <Field
                                            name="nome"
                                            type="text"
                                            className="formField form-control"
                                            placeholder="Yor Name"
                                        />
                                    </div>
                                    <div className="erros">
                                        <ErrorMessage
                                            component="span"
                                            name="nome"
                                            className="formErro"
                                        />
                                    </div>
                                    <div className="formGroup">
                                        <Field
                                            as={CustomInputComponent}
                                            name="comentario"
                                            className="formField form-control"
                                            placeholder="Yor Massage"
                                        />
                                    </div>
                                    <div className="error">
                                        <ErrorMessage
                                            component="span"
                                            name="comentario"
                                            className="formErro"
                                        />
                                    </div>
                                    <Button type="submit">Send Message </Button>
                                </Form>
                            </Formik>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="height-text">
                            <div className="card-content-coment">
                                <div className="items-wrapper">
                                    <div className="buttons">
                                        <BsChevronLeft
                                            onClick={hendleLeftClick}
                                            className="letftButton"
                                        />
                                        <BsChevronRight
                                            onClick={hendleRightClick}
                                            className="rightButton"
                                        />
                                    </div>
                                    <div className="items" ref={carousel}>
                                        {comentarios.map((coment) => (
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
        </div>
    );
}
