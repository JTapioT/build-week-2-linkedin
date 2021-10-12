import { Form, Button, Dropdown } from "react-bootstrap";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const AddExperience = (props) => {
  const { id } = useParams(props);
  const history = useHistory(props);
  const [dateStartValue, setDateStartValue] = useState("");
  const [dateEndValue, setDateEndValue] = useState("");

  useEffect(() => {
    /* Manage here the time format to YYYY - MM - DD */
  }, [dateStartValue, dateEndValue]);

  return (
    <>
      <div className="modal" id="addExperienceModal" data-backdrop="static">
        <Container
          className="mt-5 modal-body"
          style={{ backgroundColor: "white" }}
        >
          <h4 className="text-center">Add Experience</h4>
          <Row className="justify-content-center">
            <Col md={10}>
              <div>
                <div className="add-Exp">
                  <Form>
                    <Row>
                      <Col md={10}>
                        <div>
                          <h6>Notify Network</h6>
                          <small>
                            Turn on to notify your network. Job change updates
                            can take up to 2 hours.{" "}
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
                      </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Title*</Form.Label>
                      <Form.Control
                        type="title"
                        placeholder="Ex: Retail Sales Manger"
                      />
                    </Form.Group>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Employement Type</Form.Label>
                      <Form.Control as="select">
                        <option>Please Select</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <small>Country-specific employment types</small>
                      </Form.Control>
                    </Form.Group> */}
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
                    {/*  <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I am currently working in this role"
                      />
                    </Form.Group> */}
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "300px" }}
                    >
                      <p className="mr-2">Start date*</p>
                      <DayPickerInput
                        onDayChange={(day) => {
                          setDateStartValue(day);
                        }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "300px" }}
                    >
                      <p className="mr-2">End date*</p>
                      <DayPickerInput
                        onDayChange={(day) => {
                          setDateEndValue(day);
                        }}
                      />
                    </div>
                    {/*   <Dropdown>
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
                    </Dropdown> */}
                    {/* <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Headline</Form.Label>
                      <Form.Control type="headline" placeholder="" />
                    </Form.Group> */}
                    {/*  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Industry*</Form.Label>
                      <Form.Control
                        type="companyName"
                        placeholder="Ex: select an industry"
                      />
                      <Form.Label>
                        LinkedIn uses industry information to provide more
                        relevant recommendations
                      </Form.Label>
                    </Form.Group> */}
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
                      className="default-btn-style ml-2"
                      variant="outline-primary"
                    >
                      {" "}
                      + Add Media
                    </Button>{" "}
                  </Form>
                </div>
              </div>
              <div className="mt-3">
                <Button
                  className="default-btn-style ml-auto mr-2"
                  variant="primary"
                  style={({ color: "white" }, { backgroundColor: "blue" })}
                >
                  Save
                </Button>{" "}
                <Button
                  data-dismiss="modal"
                  className="default-btn-style ml-auto"
                  variant="primary"
                  style={({ color: "white" }, { backgroundColor: "blue" })}
                  onClick={() => {
                    history.push(`/profile/${id}`);
                  }}
                >
                  Close
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddExperience;
