import React from "react";
import { Card,Row,Col } from "react-bootstrap";

const UserInfoJumbotron = () => {
  return (
    <div>
        <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
      <Row>
          <Col md={9}>
          
          </Col>
          <Col md={3}>

          </Col>
      </Row>
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
};
export default UserInfoJumbotron;
