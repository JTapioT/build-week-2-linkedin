import { useState, useEffect } from "react";
import UserExperienceDetails from "./UserExperienceDetails";

function Experience(props) {
  /*  const [user, setUser] = useState({}); */
  const [userId, setUserId] = useState(props.id);
  const [userExperience, setUserExperience] = useState([]);
  const [isExperienceIconHover, setExperienceIconHover] = useState(false);
  const [isExperienceAddClicked, setExperienceClicked] = useState(false);

  const experienceIconStyle = {
    fontSize: "1.2em",
    backgroundColor: isExperienceIconHover ? "lightgrey" : null,
    borderRadius: "50%",
    padding: "0.4em 0.6em",
    cursor: isExperienceIconHover ? "pointer" : null,
    transition: "linear 0.3s",
  };

  async function fetchUser() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${
          userId === "me" ? "6163efdfa890cc0015cf07de" : userId
        }/experiences`,
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
          },
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        setUserExperience(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="mt-3"
      style={{
        borderTopRightRadius: "18px",
        borderTopLeftRadius: "18px",
        borderTop: "1px solid lightgrey",
        borderLeft: "1px solid lightgrey",
        borderRight: "1px solid lightgrey",
        padding: "24px",
        backgroundColor: "white",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h5>Experience</h5>
        <i
          className="bi bi-plus-lg"
          data-toggle={isExperienceAddClicked ? "modal" : null}
          data-target={isExperienceAddClicked ? "#addExperienceModal" : null}
          style={experienceIconStyle}
          onMouseEnter={() => {
            setExperienceIconHover(true);
          }}
          onMouseLeave={() => {
            setExperienceIconHover(false);
          }}
          onClick={() => {
            setExperienceClicked(true);
            props.history.push(`/profile/${userId}/edit/forms/position/new`);
          }}
        ></i>
      </div>
      <div className="d-flex flex-column mt-3">
        {userExperience.length ? (
          userExperience.map((experience) => {
            return (
              <UserExperienceDetails
                history={props.history}
                id={userId}
                experience={experience}
              />
            );
          })
        ) : (
          <div className="d-flex">
            <div className="mr-3">
              <img
                src={
                  "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
                }
                style={{ width: "80px", height: "80px" }}
                alt="thumbnail for now"
              />
            </div>
            <div
              className="d-flex justify-content-between w-100"
              style={{ borderBottom: "0.5px solid #ccc", paddingBottom: "1em" }}
            >
              <div className="d-flex flex-column justify-content-between">
                <h5 className="m-0">Occupation</h5>
                <p className="m-0">Company</p>
                <small className="m-0">Oct 2021 - Oct 2021</small>
              </div>
              <i className="bi bi-pencil" style={{ fontSize: "20px" }}></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
