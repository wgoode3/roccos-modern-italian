import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import Appetisers from './Components/Appetisers';
import Entrees from './Components/Entrees';
import Desserts from './Components/Desserts';
import Location from './Components/Location';
import NotFound from './Components/NotFound';


function App(props) {

  function setActive(e) {
    // e.preventDefault();
    const links = document.getElementsByClassName("nav-link");
    for(let link of links) {
      link.classList.remove("active");
    }
    e.target.classList.add("active");
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Rocco's Modern Italian</h1>
      </div>
      <ul className="nav nav-tabs mb-5">
        <li className="nav-item">
          <Link id="root" className="nav-link active" to="/" onClick={setActive}>Appetizers</Link>
        </li>
        <li className="nav-item">
          <Link id="entrees" className="nav-link" to="/entrees" onClick={setActive}>Entrees</Link>
        </li>
        <li className="nav-item">
          <Link id="desserts" className="nav-link" to="/desserts" onClick={setActive}>Desserts</Link>
        </li>
      </ul>
      <Router>
        <Appetisers path="/" />
        <Entrees path="/entrees" />
        <Desserts path="/desserts" />
        <Location path="/location/:city" />
        <NotFound path="*" />
      </Router>
      <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
          <Link className="nav-link" to="/location/Chicago">Chicago Location</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/location/DC">DC Location</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/location/Tulsa">Tulsa Location</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
