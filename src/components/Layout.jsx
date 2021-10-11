import { Container, Row, Col } from "react-bootstrap";
import Experience from "./Experience";
import Education from "./Education";
import SkillsEndorsements from "./SkillsEndorsements";
import About from "./About";
import UserInfoJumbotron from "./UserInfoJumbotron";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

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
                <UserInfoJumbotron />
                <Experience />
                <Education />
                <SkillsEndorsements />
                <About />{" "}
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                {/* Div elements below are just to showcase how it would look */}
                <PeopleYouMayKnow />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
