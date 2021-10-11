function SkillsEndorsements() {
  return (
      <div>
        <div
          style={{
            borderTopRightRadius: "18px",
            borderTopLeftRadius: "18px",
            borderTop: "2px solid lightgrey",
            borderLeft: "2px solid lightgrey",
            borderRight: "2px solid lightgrey",
            padding: "24px",
            backgroundColor: "white"
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3>Skills & endorsements</h3>
            <div className="d-flex align-items-baseline">
              <p className="p-0 m-0 mr-3">Add a new skill</p>
              <i class="bi bi-pencil" style={{ fontSize: "20px" }}></i>
            </div>
          </div>
          <div className="default-btn-style mt-3">Take a skill quiz</div>
          <div className="mt-3">
            <div
              className="d-flex flex-column"
              style={{ borderBottom: "0.5px solid #ccc" }}
            >
              <h6>
                Endorsement for something{" "}
                <span className="text-muted">
                  &middot;
                  <small className="ml-1">5</small>
                </span>
              </h6>
              <p className="mt-2">
                <strong>John Doe</strong> has given an endorsement for this
                skill
              </p>
            </div>
            <div
              className="d-flex flex-column mt-2"
              style={{ borderBottom: "0.5px solid #ccc" }}
            >
              <h6>
                Endorsement for something{" "}
                <span className="text-muted">
                  &middot;
                  <small className="ml-1">3</small>
                </span>
              </h6>
              <p className="mt-2">
                <strong>John Doe</strong> has given an endorsement for this
                skill
              </p>
            </div>
            <div
              className="d-flex flex-column mt-2"
            >
              <h6>
                Endorsement for something{" "}
                <span className="text-muted">
                  &middot;
                  <small className="ml-1">1</small>
                </span>
              </h6>
              <p className="mt-2">
                <strong>John Doe</strong> has given an endorsement for this
                skill
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-baseline justify-content-center py-2"
          style={{
            border: "2px solid lightgrey",
            borderBottomLeftRadius: "18px",
            borderBottomRightRadius: "18px",
            backgroundColor: "white"
          }}
        >
          <h5 className="m-0" style={{ color: "grey" }}>
            Show More
          </h5>
          <i class="bi bi-caret-down" style={{ color: "grey" }}></i>
        </div>
      </div>
  );
}

export default SkillsEndorsements;
