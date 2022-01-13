import React from "react";
import "../App.css";

function Navbar() {
  const handleClick = () => {
    console.log("bacon wrapped tomatoes");
  };
  return (
    <div className="navbar">
      <div className="leftLinks">
        <button onClick={handleClick}>Sam Rosenberg</button>
        <button>Profile</button>
        <button onClick={handleClick}>Areas of Study</button>
        <button>Career Development</button>
        <button>Education</button>
        <button>Portfolio</button>
      </div>
    </div>
  );
}

export default Navbar;
