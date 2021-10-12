import MyNavBar from "./components/MyNavBar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { BrowserRouter, Route, useParams } from "react-router-dom";


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
      {/* render={(props) => <Home title="Strive" {...props} />} */}
    </BrowserRouter>
    </>
  )
} 

export default App
