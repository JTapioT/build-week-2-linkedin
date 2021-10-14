import MyNavBar from "./components/MyNavBar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { BrowserRouter, Route, useParams } from "react-router-dom";
import AddExperience from "./components/AddExperience";
import FeedLayout from "./components/FeedLayout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/profile/:id"
          render={(props) => (
            <>
              <MyNavBar />
              <FeedLayout {...props} />
            </>
          )}/>
        <Route
          path="/profile/:id"
          render={(props) => (
            <>
              <MyNavBar />
              <Layout {...props} />
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
