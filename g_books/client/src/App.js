import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./pages/Search"
import './books.css'
import MainCard from "./components/MainCard"


function App() {
  return (
    <Router>
      <Navbar />
      <MainCard />
      <div>
        <Route exact path="/" component={Search} />


      </div>
    </Router>
  );
}

export default App;
