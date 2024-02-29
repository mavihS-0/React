import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./pages.css";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [recipes, setRecipes] = useState(null);
  const foodTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  const getData = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}&mealType=${selectedMeal}`;
      const data = await axios(url);
      setRecipes(data.data.hits);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="homeWrapper">
      <form onSubmit={getData} className="searchForm">
        <div className="searchFormColumn">
          <input
            className="searchInput"
            type="text"
            id="query"
            placeholder="Enter search query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="searchSelect"
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {foodTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
      <div className="cardsWrapper">
        {!recipes ? (
          <div></div>
        ) : recipes.length === 0 ? (
          <div>No recipes found</div>
        ) : (
          recipes.map(({ recipe }, index) => (
            <Card recipe={recipe} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
