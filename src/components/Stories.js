import React from "react";
import { Card } from 'react-bootstrap';

const Stories = () => {
  return (
    <main>
     <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 >Stories</h1></Card.Title>
          <Card.Text>
            This is the page for Stories
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Stories;
