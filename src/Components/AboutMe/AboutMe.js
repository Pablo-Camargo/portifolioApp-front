import React from 'react';
import { Card,Container,Row, Col } from 'react-bootstrap';
import './AboutMe.css'
export default  function AboutMe(){

 


  return (
    <>
    <Container id={'about'} className=''>
        
          <h2>About Me</h2>
         <Row>
          <Col className='col-sm-6 '>
            <div className="contentCard">
              <h2>Academic History</h2>
              <Card className='colorCard'>
                <div id="example-fade-text">
                   GrowDev
                   
                </div>
                <span>2020 - 2021</span>
            
              </Card>
            </div>
          </Col>
          <Col>
              <div className="contentCard">
                  <h2>Work Experience</h2>
                  <Card className='colorCard'>
                      <div id="example-fade-text">
                        1 Year Working - N49
                      </div>
                
                    </Card>
                </div>
          </Col>
        </Row>
     </Container>
    </>
  );
}
