import React from "react";

const Main = ({ user }) => {
  return (
    <div>
      <h4>Age: {user?.dob?.age}</h4>
      <h4>Gender: {user?.gender}</h4>
      <h4>Cell: {user?.cell}</h4>
    </div>
  );
};

export default Main;
