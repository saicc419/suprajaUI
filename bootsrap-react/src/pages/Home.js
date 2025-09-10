import React from "react";
import Counter from "../components/Counter";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="text-center">

<header id="home" className="bg-primary text-white text-center d-flex align-items-center" style={{height:"100vh"}}>
      <div className="container">

      <h2>🏠 Home Page</h2>
      

      <Button variant="primary" className="mb-3 btn-success">
        Bootstrap Button
      </Button>
        <h3 className="display-3 fw-bold">Welcome to the Home page of this React + Bootstrap app!</h3>
        <p className="lead">Innovative Tech Solutions for Your Business</p>
        <a href="#services" className="btn btn-light btn-lg mt-3">Explore Services</a>
      </div>
    </header>
    

      <Counter />
    </div>
  );
}

export default Home;
