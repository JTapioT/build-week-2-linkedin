import { Container, Row, Col } from "react-bootstrap";
import PeopleYouMayKnow from './PeopleYouMayKnow'
import SkillsEndorsements from "./SkillsEndorsements";
import About from './About'


function Layout() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={9}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                {/* Div elements below are just to showcase how it would look */}
                <SkillsEndorsements/>
                <div
                  style={{
                    height: "100px",
                    backgroundColor: "lightgreen",
                    borderRadius: "18px",
                  }}
                >
                </div>
                <div
                  className="mt-3"
                  style={{
                    borderRadius: "18px",
                  }}
                >
                  <About />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                {/* Div elements below are just to showcase how it would look */}
                <div
                  style={{
                    borderRadius: "18px",
                  }}
                >
                  <PeopleYouMayKnow />
                </div>
                <div
                  className="mt-3"
                  style={{
                    height: "500px",
                    backgroundColor: "orange",
                    borderRadius: "18px",
                  }}
                >
                  Aside area
                </div>
                <div
                  className="mt-3"
                  style={{
                    height: "200px",
                    backgroundColor: "orange",
                    borderRadius: "18px",
                  }}
                >
                  Aside area
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
