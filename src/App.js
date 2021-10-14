import MyNavBar from "./components/MyNavBar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { BrowserRouter, Route, useParams } from "react-router-dom";
 import AddExperience from "./components/AddExperience";
 import EditExperience from "./components/EditExperience";
import NewsFeedProfile from "./components/NewsFeedProfile";
import AddToYourFeed from "./components/AddToYourFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path="/profile/:id"
          render={(props) => (
            <>
              <MyNavBar />
              <Layout {...props} />
              {/* <Route path="/AddExperiance" exact component={AddExperience} />  */}
              <AddExperience />
              <NewsFeedProfile/>
              <AddToYourFeed/>
              <Footer />
            </>
          )}
        />
        <Route
          path="/profile/:id/edit/forms/position/new"
          render={(props) => <AddExperience {...props} />}
        />
      </BrowserRouter>
    </>
  );
} 

export default App
