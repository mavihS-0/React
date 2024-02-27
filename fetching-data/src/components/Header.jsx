import React from "react";
import "../index.css";

const Header = ({ user }) => {
  return (
    <div className="headerRow">
      <img src={user.picture?.large} alt="user" />
      <div className="headerColumn">
        <h1>
          {user.name?.first} {user.name?.last}
        </h1>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Header;
