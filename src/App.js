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
    <Route path="/profile/:id" render={(props) => (
        <>
        <MyNavBar/>
        <Layout {...props}/>
        {/* <Route path="/AddExperiance" exact component={AddExperience} />  */}
        <AddExperience/>
        <EditExperience/>
        <Footer />
        </>
      )
    }/>
    <Route path="/profile/:id/edit/forms/position/new" exact
    render={() => <AddExperience/>}/>
    </BrowserRouter>
    </>
  )
} 

export default App
