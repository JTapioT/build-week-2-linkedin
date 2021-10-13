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
  const history = useHistory(props);

  async function submitData(body) {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "POST",
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

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
    isValidating,
    status,
  } = useFormik({
    initialValues: {
      role: "",
      company: "",
      description: "",
      area: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      submitData(values);
      alert(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });


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
                        placeholder={`${formatDate(new Date())}`}
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
                          values.endDate = input.value === "" ? null : input.value;
                        }}
                        placeholder={`${formatDate(new Date())}`}
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
                    <div className="mt-3">
                      <Button
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
  );
}

export default AddExperience;
