import {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";

function UserExperienceDetails({history,id,experience}) {

  const [penHover, setPenHover] = useState(false);
  const [isExperienceEditClicked, setExperienceEditClicked] = useState(false);

  const penStyle = {
    fontSize: "20px",
    backgroundColor: penHover ? "lightgrey" : null,
    borderRadius: "50%",
    padding: "0.1em",
    cursor: penHover ? "pointer" : null,
  };

  return (
    <div key={experience._id} className="d-flex">
      <div className="mr-3 mt-2">
        <img
          src={
            experience.image
              ? experience.image
              : "http://www.floorepoxyindustrial.com/images/colorchart/medium-gray.jpg"
          }
          style={{ width: "80px", height: "80px" }}
          alt="thumbnail for now"
        />
      </div>
      <div
        className="d-flex justify-content-between w-100 mt-2"
        style={{
          borderBottom: "0.5px solid #ccc",
          paddingBottom: "1em",
        }}
      >
        <div className="d-flex flex-column justify-content-between">
          <h5 className="m-0">{experience.role}</h5>
          <p className="m-0">{experience.company}</p>
          <p className="m-0">{experience.description}</p>
          <small className="m-0">{`${experience.startDate.substr(0,4)} - ${
            experience.endDate.substr(0,4) ? experience.endDate.substr(0,4) : ""
          }`}</small>
        </div>
        <i
          className="bi bi-pencil align-self-start"
          data-toggle={isExperienceEditClicked ? "modal" : null}
          data-target={isExperienceEditClicked ? "#editExperienceModal" : null}
          style={penStyle}
          onMouseEnter={() => {
            setPenHover(true);
          }}
          onMouseLeave={() => {
            setPenHover(false);
          }}
          onClick={() => {
            setExperienceEditClicked(true);
            history.push(
              `/profile/${id}/edit/forms/position/${experience._id}`
            );
          }}
        ></i>
      </div>
    </div>
  );
}
export default UserExperienceDetails;