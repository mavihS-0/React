import React from "react";
import { useLocation } from "react-router-dom";
import "./pages.css";

const Details = () => {
  const { state } = useLocation();
  return (
    <div className="detailsWrapper">
      <div className="foodWrapper">
        <h1>{state.label}</h1>
        <img src={state.image} alt={state.label} />
        <p>Calories: {state.calories}</p>
      </div>
      <div className="ingredientsWrapper">
        <h2>Ingredients</h2>
        <ul>
          {state.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
