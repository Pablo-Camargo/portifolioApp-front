import React from "react";
import "./Experience.css";
import { BsCheckCircle } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

export default function Experience() {
    return (
        <div id={"experience"}>
            <Container>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>

                <div className="containerExperience ">
                    <Row>
                        <Col sm={6}>
                            <div className="backGrond">
                                <h3>Frontend Development</h3>
                                <div className="experienceFront">
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>HTML</h4>
                                            <small className="textExp">
                                                Experienced
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>CSS</h4>
                                            <small className="textExp">
                                                Experienced
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>JavaScript</h4>
                                            <small className="textExp">
                                                Experienced
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>Bootstrap</h4>
                                            <small className="textExp">
                                                Experienced
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>React</h4>
                                            <small className="textExp">
                                                studying
                                            </small>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="backGrond">
                                <h3>Backend Development</h3>
                                <div className="experienceBack">
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>PHP</h4>
                                            <small className="textExp">
                                                Basic
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>Node js</h4>
                                            <small className="textExp">
                                                Basic
                                            </small>
                                        </div>
                                    </article>
                                    <article className="experienceDetail">
                                        <BsCheckCircle />
                                        <div className="contentSkil">
                                            <h4>Mysql</h4>
                                            <small className="textExp">
                                                Basic
                                            </small>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
