import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Date from "./Date";

function Home() {
  return (
    <div className="home">
      <Date />
      <Banner />
    </div>
  );
}

export default Home;
