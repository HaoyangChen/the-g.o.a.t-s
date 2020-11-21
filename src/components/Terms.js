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

      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Terminology</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}> The Greatest Tool Against Human Trafficking</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br></br>
      <Container >
        <br></br>
        <Row>
          <Col lg={4}><img src='termsPage.jpg' height='250'></img></Col>
          <Col lg={8}><p align='left'>As educators, bystanders and allies, it is essential to understand and recognize the terminology associated with the acts of sex and human trafficking so that you can stay aware and properly intervene in this growing issue.</p>
            <p align='left'>As educators, bystanders and allies, it is essential to understand and recognize the terminology associated with the acts of sex and human trafficking so that you can stay aware and properly intervene in this growing issue.</p>
            <p align='left'>As educators, bystanders and allies, it is essential to understand and recognize the terminology associated with the acts of sex and human trafficking so that you can stay aware and properly intervene in this growing issue.</p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6} lg={4}>
            <Col style={{ padding: 10 }}>
              <ExpansionPanel style={{ background: '#F2F2F2' }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component='overline' variant='overline' color='primary' >
                    Human Trafficking
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/ˈhyoo·muhn tra·fuh·kuhng/ </Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        Human trafficking involves the use of force, fraud, or coercion to obtain some type of labor or commercial sex act. Every year, millions of men, women, and children are trafficked worldwide – including right here in the United States. It can happen in any community and victims can be any age, race, gender, or nationality. Traffickers might use violence, manipulation, or false promises of well-paying jobs or romantic relationships to lure victims into trafficking situations.
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
                    Sex Trafficking
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/seks tra·fuh·kuhng/ </Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        The action or practice of illegally transporting people from one country or area to another for the purpose of sexual exploitation.
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
                    Facilitators
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/fuh·si·luh·tei·trz/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        It is important to realize that human trafficking operations often intersect or exist alongside legitimate businesses. As a result, certain industries may help to enable, support, or facilitate human trafficking. This “support structure” may include a wide range of individuals, organizations, businesses and corporations, and Internet sites and practices. Common facilitators on which traffickers frequently rely include: Hotels and Motels, Landlords, Labor brokers, Taxi and other driving services, Airlines, bus, and rail companies, Advertisers (Websites like Craigslist.com and Backpage.com; Phone books; Alternative newspapers), Banks and other financial services companies, and Inmate pen-pal services.
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
                    Coercion
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/kow·ur·zhn/</Typography>
                    </Row>
                    <Row>
                      <Typography>verb</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        Threats or perceived threats of serious harm to or physical constraints against any person; a scheme intended to cause a person to believe that failure to perform will result in serious harm to or physical restraint against any person.

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
                    Circuit
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/sur·kuht/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        A series of cities among which prostituted people are moved. One example would be the West Coast circuit of San Diego, Las Vegas, Portland, and the cities in between. The term can also refer to a chain of states such as the “Minnesota pipeline” by which victims are moved through a series of locations from Minnesota to markets in New York.
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
                    Grooming
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/groo·muhng/</Typography>
                    </Row>
                    <Row>
                      <Typography>verb</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        The process a trafficker uses to manipulate a victim into prostituting for him, commonly includes romantic gestures and promises.
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
                    Forced sterilization
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/forst steh·ruh·luh·zei·shn/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        The process of permanently ending someone's ability to reproduce without his or her consent. Women around the world have many issues that they face and need to overcome. One of these issues is forced sterilization.This has occurred around the world, including here in the United States
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
                    Branding
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/bran·duhng/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        A tattoo or carving on a victim that indicates ownership by a trafficker/pimp/gang.
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
                    Exit Fee
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/ek·suht fee/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        The money a pimp will demand from a victim who is thinking about trying to leave. It will be an exorbitant sum, to discourage her from leaving. Most pimps never let their victims leave freely.
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
                    Finesse Pimp
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/fuh·nes pimp/</Typography>
                    </Row>
                    <Row>
                      <Typography>noun</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        One who prides himself on controlling others primarily through psychological manip­ulation. Although he may shower his victims with affection and gifts (especially during the recruitment phase), the threat of violence is always present
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
                    Seasoning
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/see·zuh·nuhng/</Typography>
                    </Row>
                    <Row>
                      <Typography>verb</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        A combination of psychological manipulation, intimidation, gang rape, sodomy, beatings, deprivation of food or sleep, isolation from friends or family and other sources of support, and threatening or holding hostage of a victim’s children. Seasoning is designed to break down a victim’s resistance and ensure compliance.
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
                    Automatic
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                    <Row>
                      <Typography>/aa·tuh·ma·tuhk/</Typography>
                    </Row>
                    <Row>
                      <Typography>adjective</Typography>
                    </Row>
                    <Row style={{ paddingTop: '1em' }}>
                      <Typography align='left' component='body1' variant='body1'>
                        A term denoting the victim’s “automatic” routine when her pimp is out of town, in jail, or otherwise not in direct contact with those he is prostituting. Victims are expected to comply with the rules and often do so out of fear of punishment or because they have been psychologically manipulated into a sense of loyalty or love. All money generated on “automatic” is turned over to the pimp. This money may be used to support his concession/phone account or to pay his bond if he’s in jail.
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
