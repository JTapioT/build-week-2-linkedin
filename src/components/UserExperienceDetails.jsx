import {useState} from 'react';

function UserExperienceDetails({experience}) {

  const [penHover, setPenHover] = useState(false);

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
        <small className="m-0">{`${experience.startDate} - ${
          experience.endDate ? experience.endDate : ""
        }`}</small>
      </div>
      <i
        className="bi bi-pencil align-self-start"
        style={penStyle}
        onMouseEnter={() => {
          setPenHover(true);
        }}
        onMouseLeave={() => {
          setPenHover(false);
        }}
      ></i>
    </div>
  </div>
  )
}
export default UserExperienceDetails;