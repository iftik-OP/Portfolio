import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="component">
      <div className="overlap-group">
        <img className="image" alt="Image" src="image-1.png" />
        <img className="dsc" alt="Dsc" src="dsc02536-1.JPG" />
        <div className="text-wrapper">Thinker.</div>
        <img className="img" alt="Image" src="image-2.png" />
        <p className="besides-being-cool-i">
          <span className="span">
            Besides being cool
            <br />I am a
          </span>       
          <span className="text-wrapper-2">&nbsp;</span>
          <span className="text-wrapper-3">Developer</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
