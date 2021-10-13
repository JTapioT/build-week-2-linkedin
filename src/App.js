import MyNavBar from "./components/MyNavBar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { BrowserRouter, Route, useParams } from "react-router-dom";
 import AddExperience from "./components/AddExperience";
 import EditExperience from "./components/EditExperience";

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
              <Footer />
            </>
          )}
        />
        <Route
          path="/profile/:id/edit/forms/position/new"
          render={(props) => <AddExperience {...props} />}
        />
        <Route
        path="/profile/:id/edit/forms/position/:experienceId"
        render={(props) => <EditExperience {...props}/>}
        />
      </BrowserRouter>
    </>
  );
} 

export default App
