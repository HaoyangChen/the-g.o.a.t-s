import React from "react";
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import TemplatedEmail from './TemplatedEmail';

const Getinvolved = () => {
  function HTEmail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Human Trafficking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function STEmail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sex Trafficking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function FSEmail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Forced Sterilization
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [HTmodalShow, HTsetModalShow] = React.useState(false);
  const [STmodalShow, STsetModalShow] = React.useState(false);
  const [FSmodalShow, FSsetModalShow] = React.useState(false);


  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Get Involved</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}> Take Action to Create Lasting Change</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <br></br>
        <br></br>
        <Row>
          <Col lg={7}><p align='left'>Once you understand the complexities of sex and human trafficking, you can get involved and help be an ally and advocate for both victims and survivors in your communities. By signing petitions, raising funds, spreading awareness, and taking other steps, you can create meaningful change and fight against human and sex trafficking. </p>
            <p align='left'>Once you understand the complexities of sex and human trafficking, you can get involved and help be an ally and advocate for both victims and survivors in your communities. By signing petitions, raising funds, spreading awareness, and taking other steps.</p>
          </Col>
          <Col lg={5}><img src='headerImage.svg' height='200'></img></Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} align="left"><h4>Stay Informed</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='inform.svg' height='100'></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Why staying educated can save lives</em></h5></Card.Title>
                    <Card.Text align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Vote</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='vote.svg' height='100'></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Exercise your right and vote now</em></h5></Card.Title>
                    <Card.Text align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Col>
                </Row>
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
                <Row>
                  <Col sm={3}>
                    <img src='volunteer.svg' height='90'></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Create a lasting impact</em></h5></Card.Title>
                    <Card.Text align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.              </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Donate</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='donate.svg' height='80'></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Go the extra mile</em></h5></Card.Title>
                    <Card.Text align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit.  </Card.Text>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://donate.polarisproject.org/page/69978/donate/1?ea.tracking.id=2020HP1" target="_blank">Polaris</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://www.stopthetraffik.org/donate/" target="_blank">Stop the Traffik</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://act.unfoundation.org/onlineactions/SmFcWa8uHUea1iMzKrSCEg2" target="_blank">United Nations</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Card>
          <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Contact your Representatives</h4></Card.Header>
          <Card.Body>
            <Row>
              <Col sm={2}>
                <img src='Email.svg' height='100'></img>
              </Col>
              <Col sm={10}>
                <Card.Title align="left"><h5><em>Use your voice, speak up and act now</em></h5></Card.Title>
                <Card.Text align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat venenatis est non euismod. Mauris quis sem ex. Sed eros nulla, gravida ut diam et, lobortis ullamcorper nibh. Mauris consequat faucibus quam, id suscipit massa mollis in. Curabitur rutrum magna dui. Vivamus vitae finibus est, id tincidunt velit. Mauris pellentesque magna vel magna fringilla, nec tincidunt sapien blandit. Curabitur imperdiet, lacus at varius elementum, leo lorem interdum dui, tempus bibendum sem tellus eget ante.
              </Card.Text>
                <Row>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => HTsetModalShow(true)}>Human Trafficking</Button>
                    <HTEmail
                      show={HTmodalShow}
                      onHide={() => HTsetModalShow(false)}
                    />
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => STsetModalShow(true)}>Sex Trafficking</Button>
                    <STEmail
                      show={STmodalShow}
                      onHide={() => STsetModalShow(false)}
                    />
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => FSsetModalShow(true)}>Forced Sterilization</Button>
                    <FSEmail
                      show={FSmodalShow}
                      onHide={() => FSsetModalShow(false)}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br></br>
      </Container >
    </main >
  );
};

export default Getinvolved;
