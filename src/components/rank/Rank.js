import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      {`${name} , your current rank is...`}
      <span className=" white f1 ">
        {entries}
        {/* <div className="white f3">
        <p>{`${name} : Rank is# ${entries} `}</p>
      </div>{" "} */}
      </span>
    </div>
  );
};

export default Rank;
