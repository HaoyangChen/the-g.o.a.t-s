import React from "react";
import { Card } from 'react-bootstrap';


const Getinvolved = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Get Involved</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}> This is the page for Get Involved</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Getinvolved;
