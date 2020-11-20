import React from "react";
import { Card } from 'react-bootstrap';


const FAQ = () => {
  return (
    <main>
      <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1>FAQ</h1></Card.Title>
          <Card.Text>
            This is the page for FAQ
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default FAQ;
