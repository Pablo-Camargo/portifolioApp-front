import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";
export default function AboutMe() {
    return (
        <div id={"about"}>
            <Container className="">
                <h2>About Me</h2>
                <Row>
                    <Col sm={6}>
                        <div className="contentCard">
                            <h2>Academic History</h2>
                            <Card className="colorCard">
                                <div id="example-fade-text">GrowDev</div>
                                <span>2020 - 2021</span>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="contentCard">
                            <h2>Work Experience</h2>
                            <Card className="colorCard">
                                <div id="example-fade-text">
                                    1 Year Working - N49
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
