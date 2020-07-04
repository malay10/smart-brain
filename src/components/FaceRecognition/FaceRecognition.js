import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div className="bounding-box" style={faceBox(box)}></div>
      </div>
    </div>
  );
};

const faceBox = (box) => {
  return {
    position: "absolute",
    boxShadow: "0 0 0 3px #149df2 inset",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    cursor: "pointer",
    left: box.leftCol,
    top: box.topRow,
    bottom: box.bottomRow,
    right: box.rightCol,
  };
};

export default FaceRecognition;
