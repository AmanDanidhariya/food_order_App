import React, { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
    }
    const meals = await response.json();
    setLoadedMeals(meals);
  }
  useEffect(() => {
    fetchMeals();
  });
  console.log(loadedMeals);

  return (
    <ul id="meals">
      {loadedMeals.map((item) => (
        <MealItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Meals;
