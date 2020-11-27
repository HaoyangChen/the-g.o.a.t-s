import React from "react";
import { Card, Button, Container, Row, Col, Accordion } from 'react-bootstrap';

const Getinvolved = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Get Involved</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}> This is the page for Get Involved</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <br></br>
        <Row>
          <Col lg={7}><p align='left'>Once you understand the complexities of sex and human trafficking, you can get involved and help be an ally and advocate for both victims and survivors in your communities. By signing petitions, raising funds, spreading awareness, and taking other steps, you can create meaningful change and fight against human and sex trafficking. </p>
            <p align='left'>Once you understand the complexities of sex and human trafficking, you can get involved and help be an ally and advocate for both victims and survivors in your communities. By signing petitions, raising funds, spreading awareness, and taking other steps.</p>
          </Col>
          <Col lg={5}><img src='GetInvolvedHeader.svg' height='200'></img></Col>
        </Row>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} align="left"><h4>Stay Informed</h4></Card.Header>
              <Card.Body>
                <Card.Title align="left"><h5><em>Why staying educated can save lives</em></h5></Card.Title>
                <Card.Text align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Vote</h4></Card.Header>
              <Card.Body>
                <Card.Title align="left"><h5><em>Exercise your right and vote now</em></h5></Card.Title>
                <Card.Text align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Volunteer</h4></Card.Header>
              <Card.Body>
                <Card.Title align="left"><h5><em>Create a lasting impact</em></h5></Card.Title>
                <Card.Text align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Donate</h4></Card.Header>
              <Card.Body>
                <Card.Title align="left"><h5><em>Go the extra mile</em></h5></Card.Title>
                <Card.Text align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit.
                </Card.Text>
                <Row>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }}>Go somewhere</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }}>Go somewhere</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }}>Go somewhere</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Card>
          <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Sign Petitions</h4></Card.Header>
          <Card.Body>
            <Card.Title align="left"><h5><em>Use your voice, speak up and act now</em></h5></Card.Title>
            <Card.Text align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.
          </Card.Text>
            <Accordion >
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Human Trafficking
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Sex Trafficking
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Forced Sterilization
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
        <br></br>
      </Container>
    </main >
  );
};

export default Getinvolved;
