function Experience() {
  return (
    <div className="mt-3"
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
        <i class="bi bi-plus-lg" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="d-flex flex-column mt-3">
        {/* Occupation details */}
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
            <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
        {/* Occupation detail row ends */}
        {/* Occupation details */}
        <div className="d-flex mt-4">
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
            {/* <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i> */}
          </div>
        </div>
        {/* Occupation detail row ends */}
        {/* Occupation details */}
        <div className="d-flex mt-4">
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
            {/* <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i> */}
          </div>
        </div>
        {/* Occupation detail row ends */}
      </div>
    </div>
  );
}

export default Experience;
