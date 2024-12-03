import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Termek({ jel }) {
  return (
    <div className="termek">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={jel.image || 'placeholder.jpg'} />
        <Card.Body>
          <Card.Title>{jel?.cím || 'N/A'}</Card.Title>
          <Card.Text>
            {jel?.description || 'No description available.'}
          </Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
