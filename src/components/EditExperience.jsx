import { Modal } from "react-bootstrap"
import { Form, Button, Dropdown } from "react-bootstrap";
//import { Container, Row, Col } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
const EditExperience = () =>{
    return(
        <Modal.Dialog >
  <Modal.Header closeButton>
    <Modal.Title><h4>Edit Experiance</h4></Modal.Title>
  </Modal.Header>

  <Modal.Body>
      <>
  {/* <Container className="mt-5">
          
        <Row>
          <Col md={8}> */}
            <div style={{ height: "auto" }}>
              <div className="add-Exp">
                <Form>
                  {/* <Row>
                    <Col md={8}> */}
                      <div>
                        <h6>Notify Network</h6>
                        <small>
                          Turn on to notify your network. Job change updates can
                          take up to 2 hours.{" "}
                          <a
                            className="app-aware-link"
                            target="_blank"
                            href="https://www.linkedin.com/help/linkedin/answer/86236"
                          >
                            {/**/}Learn more{/**/}
                          </a>{" "}
                        </small>

                        <BootstrapSwitchButton
                          checked={true}
                          onstyle="success"
                          size="xs"
                          className="default-btn-style"
                        />
                      </div>
                    {/* </Col>
                  </Row> */}
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title*</Form.Label>
                    <Form.Control
                      type="title"
                      placeholder="Ex: Retail Sales Manger"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Employement Type</Form.Label>
                    <Form.Control as="select">
                      <option>Please Select</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <small>Country-specific employment types</small>
                    </Form.Control>
                  </Form.Group>
                  <a
                    className="app-aware-link"
                    target="_blank"
                    href="https://www.linkedin.com/help/linkedin/answer/86236"
                  >
                    {/**/}Learn more{/**/}
                  </a>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Company name*</Form.Label>
                    <Form.Control
                      type="companyName"
                      placeholder="Ex: Microsoft"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="companyName"
                      placeholder="Ex:London United Kingdom"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I am currently working in this role"
                    />
                  </Form.Group>
                  <Dropdown>
                    <Form.Label>Start date*</Form.Label>
                    <Dropdown.Toggle>Month</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Toggle>Year</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Form.Label>End date*</Form.Label>
                    <Dropdown.Toggle>Month</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Toggle>Year</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Headline</Form.Label>
                    <Form.Control type="headline" placeholder="" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Industry*</Form.Label>
                    <Form.Control
                      type="companyName"
                      placeholder="Ex: select an industry"
                    />
                    <Form.Label>
                      LinkedIn uses industry information to provide more
                      relevant recommendations
                    </Form.Label>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Label>Media</Form.Label>
                  <Form.Label>
                    Add or link to external documents, photos, sites, videos,
                    and presentations.
                    <a
                      className="app-aware-link"
                      target="_blank"
                      href="https://www.linkedin.com/help/linkedin/answer/86236"
                    >
                      {/**/}Learn more{/**/}
                    </a>
                  </Form.Label>
                  <Button
                    className="default-btn-style"
                    variant="outline-primary"
                  >
                    {" "}
                    + Add Media
                  </Button>{" "}
                </Form>
              </div>
            </div>
            
          {/* </Col>
        </Row>
      </Container> */}
    </>
  </Modal.Body>

  <Modal.Footer>
    <Button className="default-btn-style " variant="secondary" style={({ color: "black" })}>Delete Experience</Button>
    <Button className="default-btn-style ml-auto" variant="primary" style={({ color: "white" }, { backgroundColor: "blue" })}>Save</Button>
  </Modal.Footer>
</Modal.Dialog>
    )
}

export default EditExperience