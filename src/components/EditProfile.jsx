import { Modal, Button, Nav } from "react-bootstrap";
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
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Hello</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditProfile;
