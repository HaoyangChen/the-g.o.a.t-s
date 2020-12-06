import React from "react";
import { Card } from 'react-bootstrap';


const FAQ = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>FAQ</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}>This is the page for FAQ</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default FAQ;
