import {
  Container,
  Row,
  Button,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import { useFormik } from "formik";
import * as yup from "yup";

function AddExperience(props) {
  const validationSchema = yup.object().shape({
    role: yup
      .string()
      .min(2, "Too short role description")
      .required("Role is required"),
    company: yup
      .string()
      .min(3, "Too short company name")
      .required("Company name is required"),
    description: yup
      .string()
      .min(3, "Too short description")
      .required("Description is required"),
    area: yup
      .string()
      .min(3, "Too short location name provided")
      .required("Location is required"),
  });

  const { id } = useParams(props);
  const { experienceId } = useParams(props);
  const history = useHistory(props);
  const [experience, setExperience] = useState({});
  const [isExperienceFetched, setExperienceFetched] = useState(false);

  async function fetchExperience() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experienceId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        setExperience(responseJSON);
        setExperienceFetched(true);
        console.log(values);
        console.log(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editExperience(body) {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experienceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteExperience() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchExperience();
  }, []);

  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
    initialValues: {
      role: experience.role,
      company: experience.company,
      description: experience.description,
      area: experience.area,
      startDate: experience.startDate,
      endDate: experience.endDate,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      editExperience(values);
      alert(JSON.stringify(values));
      history.push(`/profile/${id}`);
      history.go();
    },
    validationSchema: validationSchema,
  });

  return (
    Object.entries(experience).length &&
    isExperienceFetched && (
      <>
        <div className="modal" id="editExperienceModal" data-backdrop="static">
          <Container
            className="mt-5 modal-body"
            style={{ backgroundColor: "white" }}
          >
            <h4 className="text-center">Edit Experience</h4>
            <Row className="justify-content-center">
              <Col md={10}>
                <div>
                  <div className="add-Exp">
                    <Form onSubmit={handleSubmit}>
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
                      <Form.Group controlId="FormRole">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control
                          isInvalid={errors.role}
                          value={values.role}
                          onChange={handleChange}
                          name="role"
                          placeholder="Ex: Retail Sales Manger"
                        />
                        <FormControl.Feedback
                          type={errors.role ? "invalid" : "valid"}
                        ></FormControl.Feedback>
                      </Form.Group>
                      <a
                        className="app-aware-link"
                        target="_blank"
                        href="https://www.linkedin.com/help/linkedin/answer/86236"
                      >
                        {/**/}Learn more{/**/}
                      </a>
                      <Form.Group controlId="FormCompanyName">
                        <Form.Label>Company name*</Form.Label>
                        <Form.Control
                          isInvalid={errors.company}
                          value={values.company}
                          onChange={handleChange}
                          name="company"
                          placeholder="Ex: Microsoft"
                        />
                      </Form.Group>
                      <Form.Group controlId="FormLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          isInvalid={errors.area}
                          value={values.area}
                          onChange={handleChange}
                          name="area"
                          placeholder="Ex:London United Kingdom"
                        />
                        <FormControl.Feedback
                          type={errors.area ? "invalid" : "valid"}
                        ></FormControl.Feedback>
                      </Form.Group>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "300px" }}
                      >
                        <p className="mr-2">Start date*</p>

                        <DayPickerInput
                          parseDate={parseDate}
                          onDayChange={(
                            selectedDay,
                            modifiers,
                            dayPickerInput
                          ) => {
                            const input = dayPickerInput.getInput();
                            /* THIS HAS TO BE BAD PRACTICE BUT IT WORKS FOR NOW */
                            values.startDate = input.value;
                          }}
                          placeholder={`${formatDate(
                            new Date(experience.startDate)
                          )}`}
                        />
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "300px" }}
                      >
                        <p className="mr-2">End date*</p>
                        <DayPickerInput
                          parseDate={parseDate}
                          onDayChange={(
                            selectedDay,
                            modifiers,
                            dayPickerInput
                          ) => {
                            const input = dayPickerInput.getInput();
                            /* THIS HAS TO BE BAD PRACTICE BUT IT WORKS FOR NOW */
                            values.endDate =
                              input.value === "" ? null : input.value;
                          }}
                          placeholder={`${formatDate(
                            new Date(experience.endDate)
                          )}`}
                        />
                      </div>
                      <Form.Group controlId="FormDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          isInvalid={errors.description}
                          value={values.description}
                          onChange={handleChange}
                          name="description"
                        />
                        <FormControl.Feedback
                          type={errors.description ? "invalid" : "valid"}
                        ></FormControl.Feedback>
                      </Form.Group>
                      <Form.Label>Media</Form.Label>
                      <Form.Label>
                        Add or link to external documents, photos, sites,
                        videos, and presentations.
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
                      <div className="mt-3">
                        <Button
                          data-dismiss="modal"
                          className="default-btn-style ml-auto mr-2"
                          variant="primary"
                          type="submit"
                          disabled={isValid ? false : true}
                          style={
                            ({ color: "white" }, { backgroundColor: "blue" })
                          }
                        >
                          Save
                        </Button>{" "}
                        <Button
                          data-dismiss="modal"
                          className="default-btn-style ml-auto mr-2"
                          type="button"
                          style={
                            ({ color: "white" }, { backgroundColor: "red" })
                          }
                          onClick={() => {
                            deleteExperience();
                            alert("User experience deleted!");
                            history.push(`/profile/${id}`);
                          }}
                        >
                          Delete
                        </Button>{" "}
                        <Button
                          data-dismiss="modal"
                          className="default-btn-style ml-auto"
                          variant="primary"
                          type="button"
                          style={
                            ({ color: "white" }, { backgroundColor: "blue" })
                          }
                          onClick={() => {
                            history.push(`/profile/${id}`);
                          }}
                        >
                          Close
                        </Button>{" "}
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  );
}

export default AddExperience;
