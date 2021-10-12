import { Modal, Button, Nav, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Component } from "react";

const arr = [];
class EditProfile extends Component {
  state = {
    show: false,
    arr: [],
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  getData = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
        },
      }
    );
    const userData = await response.json();
    console.log(userData);
    userData.map((data) => arr.push(data));
  };

  render() {
    return (
      <>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              {" "}
              <i
                className="bi bi-pencil "
                onClick={async () => {
                  await this.getData();
                  this.handleShow();
                }}
                style={{
                  marginTop: "10px",
                  marginLeft: "720px",
                  fontSize: "20px",
                }}
              ></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Intro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="g-2">
              <Col md>
                <Form.Label>First Name</Form.Label>
                <Form.Control />
              </Col>
              <Col md>
                <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Row>
              <Nav>
                <Nav.Item>
                  <Nav.Link>Add former name</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Form.Group>
              <Form.Label>Pronouns</Form.Label>
              <Form.Control as="select">
                <option>Please select</option>
                <option value="1">She/Her</option>
                <option value="2">He/Him</option>
                <option value="3">They/Them</option>
                <option value="3">Costom</option>
              </Form.Control>
            </Form.Group>
            <p>Let others know how to refer to you.</p>
            <Nav>
              <Nav.Item>
                <Nav.Link>Learn more</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form.Group>
              <Form.Label>Headline</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={async () => {
                this.handleClose();
              }}
            >
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditProfile;
