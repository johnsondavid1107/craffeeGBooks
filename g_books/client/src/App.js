
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./pages/Search"
import './books.css'
import MainCard from "./components/MainCard"
import Saved from "./pages/Saved"



function App() {
  return (
    <Router>

      <Navbar />
      <MainCard />
      <div>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />


      </div>
    </Router>
  );
}

export default App;
