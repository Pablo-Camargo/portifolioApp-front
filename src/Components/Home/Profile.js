import React from "react";

import "./Profile.css";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Profile() {
    return (
        <div className="backgroundProfile" id={"home"}>
            <Container className="marginTop">
                <Row className="profileParent">
                    <Col xs={{ order: "last" }} className="profileDetails">
                        <div className="profileDetails">
                            <span className="primaryText helloProfile">
                                Hello, My name is
                            </span>
                            <h1 className="primaryText"> Pablo Henrique</h1>
                        </div>
                        <div className="profileRole">
                            <div className="warper">
                                <div className="contentRole">
                                    <div className="primaryInner">
                                        Ethusiastic Dev
                                    </div>
                                    <div className="primaryInner">
                                        Full Stack Developer
                                    </div>
                                    <div className="primaryInner">
                                        React/React Native ethusiastic
                                    </div>
                                </div>
                            </div>

                            <span className="ProfileRoleSpan">
                                Junior developer looking for an opportunity to
                                enter the job market. I like what I do, I like
                                to study programming and stay connected to this
                                environment, self-taught, learning English.
                            </span>
                        </div>
                        <div className="profileButtons">
                            <a href="#contact">
                                <Button className="buttonShap colorPrimary">
                                    Let's Talk
                                </Button>
                            </a>

                            <a href="pablo.pdf" download="Curiculo Pablo.pdf">
                                <Button className="buttonShap colorsecondary">
                                    Download CV
                                </Button>
                            </a>
                        </div>
                        <div className="colz">
                            <a
                                href="https://github.com/Pablo-Camargo"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pablo-henrique-m-c-elias-9b00b4207/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/pablo_camargo_/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </Col>
                    <Col xs={{ order: "first" }} className="contantFoto">
                        <div className="profilePicture">
                            <div className="pictureBackground"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
