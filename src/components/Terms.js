import React from "react";
import { Card, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Box, Typography, Paper, Hidden, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Terms = () => {
  return (

    <main>
      {/* <Jumbotron fluid>
        <Container>
          <h1>Terminology</h1>
          <p>
            This is the page for Terms
          </p>
          <img src='banner.jpg' fluid/>
        </Container>
      </Jumbotron> */}

      <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1>Terminology</h1></Card.Title>
          <Card.Text>
            This is the page for Terms
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br></br>
      <Container >
        <Row>
          <Col md={6} lg={4}>
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >

            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
          </Col>
          <Col md={6} lg={4}>
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
          </Col>
          <Col md={6} lg={4}>
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    term
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>pronunciation</Typography>
                    </Row>
                    <Row>
                      <Typography>part of speech</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography component='body1' variant='body1'>
                        definition
                        </Typography>
                    </Row>
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel >
            </Col >
          </Col>


        </Row>
      </Container >

    </main>
  );
};

export default Terms;
