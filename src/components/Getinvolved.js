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
        <Modal.Header closeButton aria-label="close">
          <Modal.Title id="contained-modal-title-vcenter">
            Human Trafficking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide} aria-label="Close">Close</Button>
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
        <Modal.Header closeButton aria-label="close">
          <Modal.Title id="contained-modal-title-vcenter">
            Sex Trafficking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide} aria-label="Close">Close</Button>
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
        <Modal.Header closeButton aria-label="close">
          <Modal.Title id="contained-modal-title-vcenter">
            Forced Sterilization
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplatedEmail />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} onClick={props.onHide} aria-label="Close">Close</Button>
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
        <Card.Img src="banner.jpg" alt="Banner image" height='230' />
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
          <Col lg={5}><img src='headerImage.svg' height='200' alt="Animation of two people working on laptops"></img></Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} style={{ padding: '1em' }}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} align="left"><h4>Stay Informed</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='inform.svg' height='100' alt="Animation of man reading a book"></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Why staying educated can save lives</em></h5></Card.Title>
                    <Card.Text align="left">
                      <p>Continue to help us spread awareness and generate much needed conversations on the growing issue of human and sex trafficking by posting and sharing on different social media platforms! Let’s work together to shed light on this important issue in order to enact real change whether its through signing and sharing petitions, fundraising money, volunteering, and much more.</p>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6} style={{ padding: '1em' }}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Vote</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='vote.svg' height='100' alt="Animation of woman placing a ballot in a vote box"></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Exercise your right and vote now</em></h5></Card.Title>
                    <Card.Text align="left">
                      <p>Make your voice heard and help make real change possible by participating in local and federal elections. By voting in upcoming elections you are able to make sure that causes you are passionate about are voted in. In addition, having conversations with your state and local representatives can bring spotlight on human and sex trafficking and hopefully onto your ballots. </p>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={12} md={12} lg={6} style={{ padding: '1em' }}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Volunteer</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='volunteer.svg' height='90' alt="Animation of a group of four people"></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Create a lasting impact</em></h5></Card.Title>
                    <Card.Text align="left">
                      <p>
                        Volunteer today! Volunteering is a great way to get involved in making real change. Its free and is an important part in helping decrease the number of human and sex traffiking cases. We have a wide variety of ways you could volunteer based on your interests and time commitment. Below are links to organizations always looking for help in the US.</p>
                    </Card.Text>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://www.publicservicedegrees.org/volunteering/in-college/" target="_blank" aria-label="Steps">Steps</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://advocatesforfreedom.org/contact-us/" target="_blank" aria-label="AFF">AFF</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="http://www.warn-trafficking.org/contact-warn/" target="_blank" aria-label="WARN">WARN</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6} style={{ padding: '1em' }}>
            <Card>
              <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Donate</h4></Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <img src='donate.svg' height='80' alt="Animation of a hand with a plant growing inside of it"></img>
                  </Col>
                  <Col sm={9}>
                    <Card.Title align="left"><h5><em>Go the extra mile</em></h5></Card.Title>
                    <Card.Text align="left">
                      <p>Consider donating today to a charity or organization of your choice to make a difference. We provide you with the necessary information that will help make it easier for you to donate to a charity you strongly align with. Every cent counts and many employers offer a donation match! Imagine the impact you could make! </p>
                    </Card.Text>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://donate.polarisproject.org/page/69978/donate/1?ea.tracking.id=2020HP1" target="_blank" aria-label="Polaris">Polaris</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://www.stopthetraffik.org/donate/" target="_blank" aria-label="Stop the Traffik">Stop the Traffik</Button>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href="https://act.unfoundation.org/onlineactions/SmFcWa8uHUea1iMzKrSCEg2" target="_blank" aria-label="United Nations">United Nations</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row style={{ padding: '1em' }}>
          <Card>
            <Card.Header style={{ color: '#4C4AC2' }} as="h5" align="left"><h4>Contact your Representatives</h4></Card.Header>
            <Card.Body>
              <Row>
                <Col sm={2}>
                  <img src='Email.svg' height='100' alt="Animation of a woman and a large envelope"></img>
                </Col>
                <Col sm={10}>
                  <Card.Title align="left"><h5><em>Use your voice, speak up and act now</em></h5></Card.Title>
                  <Card.Text align="left">
                    <p>The next step in helping is reaching out to your representative
                    so that you can enact the change that you wish to see. It is your
                    chance to make a change. No action is too small. Staying in touch
                    with your local representative is the only way to ensure that your
                    opinions are known and heard. There are a variety of different ways
                    to contact your representative including by letter, phone, email, and
                    even on rare occasions in person. All these ways are equally as
                    effective however email is the fastest and most accessible form of
                    contact. When writing your message make sure to:
                  </p>
                    <ul>
                      <li>
                        <p>
                          Put your name and address at the top of the message.</p>
                      </li>
                      <li>
                        <p>
                          Humanize the message. Make it personal to YOU.</p>
                      </li>
                      <li>
                        <p >
                          Keep it brief and factual but concise.</p>
                      </li>
                      <li>
                        <p>
                          Disagree/agree with respect.</p>
                      </li>
                      <li>
                        <p>
                          Address them correctly.</p>
                      </li>
                    </ul>
                  </Card.Text>
                  <br></br>
                  <Row>
                    <Col>
                      <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => HTsetModalShow(true)} aria-expanded="false">Human Trafficking</Button>
                      <HTEmail
                        show={HTmodalShow}
                        onHide={() => HTsetModalShow(false)}
                      />
                    </Col>
                    <Col>
                      <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => STsetModalShow(true)} aria-expanded="false">Sex Trafficking</Button>
                      <STEmail
                        show={STmodalShow}
                        onHide={() => STsetModalShow(false)}
                      />
                    </Col>
                    <Col>
                      <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2", size: "lg" }} block onClick={() => FSsetModalShow(true)} aria-expanded="false">Forced Sterilization</Button>
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
        </Row>
        <br></br>
      </Container >
    </main >
  );
};

export default Getinvolved;
