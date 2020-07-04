import React from "react";
import Tilt from "react-tilt";
import brain from "./icons8-brain-96.png";

const Logo = () => {
  return (
    <div className="ma4 mt0" style={logoStyle}>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{
          height: 150,
          width: 150,
          backgroundImage: "linear-gradient(to right,#dde8d8, #bfcf1b)",
        }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="brain-icon" />
        </div>
      </Tilt>
    </div>
  );
};

const logoStyle = {};

export default Logo;
