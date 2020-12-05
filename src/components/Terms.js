import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import LeftTextRightImage from "./LeftTextRightImage";
import RightTextLeftImage from "./RightTextLeftImage";
import {
  Box,
  Typography,
  Paper,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import type from "../assets/terms/type.svg";
import method from "../assets/terms/method.svg";
import system from "../assets/terms/system.svg";
import control from "../assets/terms/control.svg";
import termsPage from "../assets/terms/termsPage.jpg";
import banner from "../assets/banner.jpg";
import "../styles/Terms.css";

const Terms = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src={banner} alt="Banner image" height="230" />
        <Card.ImgOverlay>
          <Card.Title>
            <h1>Terminology</h1>
          </Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}>
              {" "}
              The Greatest Tool Against Human Trafficking
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br></br>
      <Container>
        <br></br>
        <Row>
          <Col lg={4} className="text-md-left">
            <img
              src={termsPage}
              height="250"
              alt="Girl in cage animation"
            ></img>
          </Col>
          <Col lg={8}>
            <p align="left">
              As educators, bystanders and allies, it is essential to understand
              and recognize the terminology associated with the acts of sex and
              human trafficking so that you can stay aware and properly
              intervene in this growing issue.
            </p>
            <p align="left">
              There are have been more than 20 million cases worldwide of human
              trafficking. It is essential that people have access to adequate
              information about this issue in order to help put a stop to these
              growing cases.
            </p>
            <p align="left">
              Below are a list of important terminologies that are recommended
              to know in order to properly be able to understand the complexity
              of this space and to have the necessary foundation to make real
              change possible.
            </p>
          </Col>
        </Row>
        <br></br>
      </Container>
      <br></br>
      <Container>
        <LeftTextRightImage
          title="Types"
          paragraph="The following terms encompass the three broad types or subtypes of trafficking. While these are not all-inclusive, these are the most common types of trafficking that occur both nationally and globally, and deny victims of rights, safety, and humanity."
          imageSrc={type}
          imageAlt="Types"
          underlineColor="bluepurple-underline"
        />
        <Row>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      Human trafficking involves the use of force, fraud, or
                      coercion to obtain some type of labor or commercial sex
                      act. Every year, millions of men, women, and children are
                      trafficked worldwide – including right here in the United
                      States. It can happen in any community and victims can be
                      any age, race, gender, or nationality. Traffickers might
                      use violence, manipulation, or false promises of
                      well-paying jobs or romantic relationships to lure victims
                      into trafficking situations.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      The action or practice of illegally transporting people
                      from one country or area to another for the purpose of
                      sexual exploitation.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Labor Trafficking
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/lei·br tra·fuh·kuhng/ </Typography>
                  </Row>
                  <Row>
                    <Typography>noun</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      Labor trafficking in the United States is a form of human
                      trafficking where victims are made to perform a task
                      through force, fraud or coercion as it occurs in the
                      United States. Labor trafficking is typically
                      distinguished from sex trafficking, where the task is
                      sexual in nature.{" "}
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
        </Row>
        <br></br>
        <RightTextLeftImage
          title="Methods"
          paragraph="These terms include some of the methods through which victims
          become involved or engage in human or sex trafficking -- such as
          through coercion, deception, abuse, grooming, or other means
          that intend to convince or force victims into trafficking."
          imageSrc={method}
          imageAlt="Methods"
          underlineColor="green-underline"
        />
        <Row>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      Threats or perceived threats of serious harm to or
                      physical constraints against any person; a scheme intended
                      to cause a person to believe that failure to perform will
                      result in serious harm to or physical restraint against
                      any person.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      The process a trafficker uses to manipulate a victim into
                      prostituting for him, commonly includes romantic gestures
                      and promises.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      A combination of psychological manipulation, intimidation,
                      gang rape, sodomy, beatings, deprivation of food or sleep,
                      isolation from friends or family and other sources of
                      support, and threatening or holding hostage of a victim’s
                      children. Seasoning is designed to break down a victim’s
                      resistance and ensure compliance.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Isolation
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/ai·suh·lei·shn/</Typography>
                  </Row>
                  <Row>
                    <Typography>verb</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      the process or fact of isolating or being isolated.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
        </Row>
        <br></br>
        <LeftTextRightImage
          title="System"
          paragraph="These terms involve the system that supports/allows human and
          sex trafficking to occur, and defines the actors and
          participants that permit and promote the continued cycle of
          violence, harm, and subjegation of human trafficking victims."
          imageSrc={system}
          imageAlt="System"
          underlineColor="bluepurple-underline"
        />
        <Row>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      It is important to realize that human trafficking
                      operations often intersect or exist alongside legitimate
                      businesses. As a result, certain industries may help to
                      enable, support, or facilitate human trafficking. This
                      “support structure” may include a wide range of
                      individuals, organizations, businesses and corporations,
                      and Internet sites and practices. Common facilitators on
                      which traffickers frequently rely include: Hotels and
                      Motels, Landlords, Labor brokers, Taxi and other driving
                      services, Airlines, bus, and rail companies, Advertisers
                      (Websites like Craigslist.com and Backpage.com; Phone
                      books; Alternative newspapers), Banks and other financial
                      services companies, and Inmate pen-pal services.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      A series of cities among which prostituted people are
                      moved. One example would be the West Coast circuit of San
                      Diego, Las Vegas, Portland, and the cities in between. The
                      term can also refer to a chain of states such as the
                      “Minnesota pipeline” by which victims are moved through a
                      series of locations from Minnesota to markets in New York.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      One who prides himself on controlling others primarily
                      through psychological manip­ulation. Although he may
                      shower his victims with affection and gifts (especially
                      during the recruitment phase), the threat of violence is
                      always present
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Madam
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/ma·dm/</Typography>
                  </Row>
                  <Row>
                    <Typography>noun</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      An older woman who manages a brothel, escort service or
                      other prostitution establishment. She may work alone or in
                      collaboration with other traffickers.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Bottom
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/baa·tm/</Typography>
                  </Row>
                  <Row>
                    <Typography>noun</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      A female appointed by the trafficker/pimp to supervise the
                      others and report rule violations. Operating as his “right
                      hand,” the Bottom may help instruct victims, collect
                      money, book hotel rooms, post ads, or inflict punishments
                      on other girls.{" "}
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <br></br>
        </Row>
        <br></br>
        <RightTextLeftImage
          title="Control"
          paragraph="These terms are all ways in which human traffickers maintain or
          exert control over their victims, and otherwise force them into
          staying, or prevent them from leaving. These tactics are very
          effective at keeping victims trapped, and discourage them from
          leaving, even when the traffickers are not around to exert this
          control."
          imageSrc={control}
          imageAlt="Control"
          underlineColor="green-underline"
        />
        <Row>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      A tattoo or carving on a victim that indicates ownership
                      by a trafficker/pimp/gang.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      A term denoting the victim’s “automatic” routine when her
                      pimp is out of town, in jail, or otherwise not in direct
                      contact with those he is prostituting. Victims are
                      expected to comply with the rules and often do so out of
                      fear of punishment or because they have been
                      psychologically manipulated into a sense of loyalty or
                      love. All money generated on “automatic” is turned over to
                      the pimp. This money may be used to support his
                      concession/phone account or to pay his bond if he’s in
                      jail.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
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
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      The money a pimp will demand from a victim who is thinking
                      about trying to leave. It will be an exorbitant sum, to
                      discourage her from leaving. Most pimps never let their
                      victims leave freely.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Collusion
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/kuh·l·zhn/</Typography>
                  </Row>
                  <Row>
                    <Typography>noun</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      secret or illegal cooperation or conspiracy, especially in
                      order to cheat or deceive others.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ padding: "1em" }}>
            <ExpansionPanel style={{ background: "#F2F2F2" }}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Open"
              >
                <Typography
                  component="overline"
                  variant="overline"
                  color="primary"
                >
                  Debt Bondage
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Container>
                  <Row>
                    <Typography>/det baan·dij/</Typography>
                  </Row>
                  <Row>
                    <Typography>noun</Typography>
                  </Row>
                  <Row style={{ paddingTop: "1em" }}>
                    <Typography align="left" component="body1" variant="body1">
                      Peonage, also known as debt slavery or bonded labour, is
                      the pledge of a person's services as security for the
                      repayment for a debt or other obligation, where the terms
                      of the repayment are not clearly or reasonably stated, and
                      the person who is holding the debt thus has some control
                      over the laborer.
                    </Typography>
                  </Row>
                </Container>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
        </Row>
        <br></br>
      </Container>
      <br></br>
    </main>
  );
};

export default Terms;
