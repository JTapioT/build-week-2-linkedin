import { Modal, Button, Nav, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Component } from "react";

class EditProfile extends Component {
  state = {
    show: false,
    userId: this.props.id === "me" ? "6163efdfa890cc0015cf07de" : this.props.id,
    user: "",
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  getData = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${this.state.userId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
        },
      }
    );
    const userDatajson = await response.json();
    const userData = {
      name: userDatajson.name,
      surname: userDatajson.surname,
      email: userDatajson.email,
      bio: userDatajson.bio,
      title: userDatajson.title,
      area: userDatajson.area,
    };
    console.log(userData);
    this.state.user = userData;
  };

  updateData = async () => {
    console.log("i am updateData");
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
          body: JSON.stringify(this.state.user),
        }
      );
      if (resp.ok) {
        const userData = await resp.json();
        console.log(userData);
        this.state.user = userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

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
                <Form.Control
                  type="text"
                  value={this.state.user.name}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      user: { ...this.state.user, name: e.target.value },
                    })
                  }
                ></Form.Control>
              </Col>
              <Col md>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.surname}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      user: { ...this.state.user, surname: e.target.value },
                    })
                  }
                />
              </Col>
            </Row>

            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={this.state.user.email}
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  user: { ...this.state.user, email: e.target.value },
                })
              }
            ></Form.Control>

            <Row className="g-2">
              <Col md>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.bio}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      user: { ...this.state.user, bio: e.target.value },
                    })
                  }
                ></Form.Control>
              </Col>
              <Col md>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.title}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      user: { ...this.state.user, title: e.target.value },
                    })
                  }
                />
              </Col>
            </Row>
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              value={this.state.user.area}
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  user: { ...this.state.user, area: e.target.value },
                })
              }
            ></Form.Control>
            <p>Let others know how to refer to you.</p>

            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={this.state.user.username}
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  user: { ...this.state.user, username: e.target.value },
                })
              }
            ></Form.Control>
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
            <Button
              variant="primary"
              onClick={() => {
                this.updateData();
                this.handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditProfile;
