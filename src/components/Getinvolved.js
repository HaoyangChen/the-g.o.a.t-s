import React from "react";
import { Card } from 'react-bootstrap';


const Getinvolved = () => {
  return (
    <main>
      <Card className="bg-dark text-black">
        <Card.Img src="banner.jpg" alt="Card image" height='230' />
        <Card.ImgOverlay>
          <Card.Title><h1 >Get Involved</h1></Card.Title>
          <Card.Text>
            This is the page for Get Involved
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
};

export default Getinvolved;
