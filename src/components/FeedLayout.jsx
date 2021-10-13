import { Container, Row, Col } from "react-bootstrap";
import AddToYourFeed from "./AddToYourFeed";
import AllPosts from "./news-feed/AllPosts";
import CreatePost from "./news-feed/CreatePost";
import NewsFeedProfile from "./NewsFeedProfile";

function FeedLayout(props) {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                
                <NewsFeedProfile />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                
                <CreatePost/>
                <AllPosts/>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col className="w-100">
                {/* INSERT HERE THE COMPONENTS */}
                <AddToYourFeed/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FeedLayout;