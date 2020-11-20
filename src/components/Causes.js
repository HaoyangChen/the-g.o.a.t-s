import React from "react";
import { Card } from 'react-bootstrap';

const Causes = () => {
  return (
    <main>
      <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 >Causes</h1></Card.Title>
          <Card.Text>
            This is the page for Causes
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Causes;
