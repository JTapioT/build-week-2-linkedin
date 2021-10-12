import MyNavBar from "./components/MyNavBar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { BrowserRouter, Route, useParams} from "react-router-dom";
import AddExperience from "./components/AddExperience";


function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/profile/:id" render={(props) => (
        <>
        <MyNavBar/>
        <Layout {...props}/>
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
