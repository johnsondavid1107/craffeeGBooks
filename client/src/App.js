
import './App.css';
import GoogleNavBar from "./components/GoogleNavBar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./pages/Search"
import './books.css'
import MainCard from "./components/MainCard"
import Saved from "./pages/Saved"



function App() {
  return (
    <Router>

      <GoogleNavBar />
      <MainCard />
      <div>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/" component={Search} />


      </div>
    </Router>
  );
}

export default App;
