import React from "react";
import logo from "../assets/logo.svg";
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <main>
      <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 >Sanctuary</h1></Card.Title>
          <Card.Text>
            <p>
              Stopping sex trafficking takes all of us. Sanctuary invites you to this
              community.
            </p>
            <p>Using Firebase, React, and React Router</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
  
      <img className="App-logo" src={logo} alt="React Logo" />
    </main>
  );
};

export default Home;
