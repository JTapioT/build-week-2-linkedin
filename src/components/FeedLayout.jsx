import { Container, Row, Col } from "react-bootstrap";

function FeedLayout(props) {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <div style={{ backgroundColor: "green", height: "300px" }}>Hello from left side</div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <div className="w-100" style={{ backgroundColor: "orange", height: "300px"}}>Hello from center</div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <div className="w-100" style={{ backgroundColor: "blue", height: "400px" }}>Hello from right</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FeedLayout;
