import React from "react";
// import logo from "../assets/logo.svg";
// import { Card } from "react-bootstrap";
import carouselImage1 from "../assets/home/carousel1.png";
import LeftTextRightImage from "./LeftTextRightImage";
import RightTextLeftImage from "./RightTextLeftImage";
import learn1 from "../assets/home/learn1.svg";
import learn2 from "../assets/home/learn2.svg";
import learn3 from "../assets/home/learn3.svg";
import { Container } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <main>
      <div class="homepage-banner">
        <div class="slogan">
          <h1>
            Stopping sex trafficking takes all of us. <span>Sanctuary </span>
            invites you to this community.
          </h1>
        </div>
      </div>
      <Container>
        <div className="left-right row-reversed">
          <div className="half-half text-align text-left pd-left">
            <h2 className={"underline-with-color blue-underline"}>Overview.</h2>
            <p class="mt-paragraph">
              Watch the introductory video to gain an understanding of the human
              and sex trafficking crisis in the United States, and see what you
              can do to help.
            </p>
          </div>
          <div class="half-half">
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=DWoHgIoLCPg" /> */}
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube.com/embed/DWoHgIoLCPg"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <LeftTextRightImage
          title="Learn."
          paragraph="Find information about key terms, causes, the process of trafficking, and more -- allowing you to approach a difficult problem with the right context."
          imageSrc={learn1}
          imageAlt="Learn"
          underlineColor="bluepurple-underline"
        />
        <RightTextLeftImage
          title="Find Resources."
          paragraph="Learn more about the support available for survivors, vulnerable populations, and connect with other platforms that raise awareness or offer insight."
          imageSrc={learn2}
          imageAlt="Find Resources"
          underlineColor="green-underline"
        />
        <LeftTextRightImage
          title="Get Involved."
          paragraph="Find out how to get involved through compiled resources. Donate, raise awareness, or engage in activist efforts on a local or national scale. "
          imageSrc={learn3}
          imageAlt="Get involved"
          underlineColor="purple-underline"
        />
      </Container>
      {/* </div> */}
    </main>
  );
};

export default Home;
