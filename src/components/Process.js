import React from "react";
import { Card } from 'react-bootstrap';

const Process = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1  style={{ fontSize: 80 }} >Process</h1></Card.Title>
          <Card.Text>
            <p  style={{ fontSize: 20 }}>This is the page for Process</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Process;
