import React from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";

const Card = ({ recipe }) => {
  const navigate = useNavigate();

  const getDetails = () => {
    navigate("details", { state: recipe });
  };

  return (
    <div className="cardWrapper" onClick={getDetails}>
      <h2 className="cardHeading">{recipe?.label}</h2>
      <img src={recipe?.image} alt={recipe?.label} />
      <button className="getCardDetailsBtn" onClick={getDetails}>
        More Info
      </button>
    </div>
  );
};

export default Card;
