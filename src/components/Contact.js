import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Banner image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Contact</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}>Meet the Team Behind Sanctuary</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row style={{ paddingTop: '2em' }}>
          <Col lg={7}>
            <p align='left'>
              This project is created as part of the final for Informatics 442. Our mission is to create a solution to allow the general public to obtain accurate information concerning Human and Sex Trafficking in one location. </p>
            <p align='left'>Each member worked to contribute to Sanctuary based on their own personal skills and strengths. If you wish to contact a member of the team click on the button located below their photo and description.</p>
          </Col>
          <Col lg={5}><img src='team.svg' height='190' alt="Animation of a group of four people"></img></Col>
        </Row>
        <Row style={{ padding: '1em' }}>
          <Col lg={4} align="left" style={{ padding: '1em' }}>
            <Card style={{ width: '18rem', height:'30rem'}}>
              <Card.Img variant="top" src="meesha.jpeg" height="200" alt="Meesha" />
              <Card.Body>
                <Card.Title align="left"><h3>Meesha Hussain</h3></Card.Title>
                <Card.Text align="left">
                  <h5 style={{ color: "#4C4AC2" }}>Project Manager/Developer</h5>
                  <p>A senior at the University of Washington studying Informatics. Passionate about developing solutions for social good. </p>
                </Card.Text>
                <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href={`mailto:hussam@uw.edu`} aria-label="Contact Me">Contact Me</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col align="left" style={{ padding: '1em' }}>
            <Card style={{ width: '18rem', height:'30rem' }}>
              <Card.Img variant="top" src="haoyang.jpeg" height="200" alt="Haoyang" />
              <Card.Body>
                <Card.Title align="left"><h3 >Haoyang Chen</h3> </Card.Title>
                <Card.Text align="left">
                  <h5 style={{ color: "#4C4AC2" }}>Full-Stack Developer</h5>
                  <p>I am an Informatics Senior Student with an emphasis on Software Development at the University of Washington.</p>
                </Card.Text>
                <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href={`mailto:haoya2@uw.edu`} aria-label="Contact Me">Contact Me</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} align="left" style={{ padding: '1em' }}>
            <Card style={{ width: '18rem', height:'30rem' }}>
              <Card.Img variant="top" src="rahma.jpg" height="200" alt="Rahma" />
              <Card.Body>
                <Card.Title align="left"><h3>Rahma Kamel</h3></Card.Title>
                <Card.Text align="left">
                  <h5 style={{ color: "#4C4AC2" }} >Project Manager/Developer </h5>
                  <p>I am currently a Senior at the University of Washington majoring in Informatics and minoring in Entrepreneurship.</p>
                </Card.Text>
                <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href={`mailto:kamelr@uw.edu`} aria-label="Contact Me">Contact Me</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} align="left" style={{ padding: '1em' }}>
            <Card style={{ width: '18rem', height:'30rem' }}>
              <Card.Img variant="top" src="salem.jpeg" height="200" alt="Salem" />
              <Card.Body>
                <Card.Title align="left"><h3>Salem Gordon</h3></Card.Title>
                <Card.Text align="left">
                  <h5 style={{ color: "#4C4AC2" }} >UX/UI Designer </h5>
                  <p>I'm a senior at the University of Washington Seattle studying Informatics and English, set to graduate in December 2020.</p>
                </Card.Text>
                <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href={`mailto:salemg@uw.edu`} aria-label="Contact Me">Contact Me</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col align="left" style={{ padding: '1em' }}>
            <Card style={{ width: '18rem', height:'30rem' }}>
              <Card.Img variant="top" src="rawuda.jpeg" height="200" alt="Rawuda" />
              <Card.Body>
                <Card.Title align="left"><h3>Rawuda Jemal</h3></Card.Title>
                <Card.Text align="left">
                  <h5 style={{ color: "#4C4AC2" }} >UX/UI Designer </h5>
                  <p>Currently a senior at the University of Washington studying Informatics with a focus on human computer interaction. </p>
                </Card.Text>
                <Button style={{ backgroundColor: '#F5F5F5', borderColor: "#F5F5F5", color: "#4C4AC2" }} href={`mailto:rawuda@uw.edu`} aria-label="Contact Me">Contact Me</Button>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </main >
  );
};

export default Contact;
