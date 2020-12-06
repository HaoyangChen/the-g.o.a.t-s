import React from "react";
import { Card } from 'react-bootstrap';

const Causes = () => {
  return (
    <main>
      <Card className="bg-light text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 style={{ fontSize: 80 }}>Causes</h1></Card.Title>
          <Card.Text>
            <p style={{ fontSize: 20 }}>This is the page for Causes</p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Causes;
