import React, { useEffect, useState } from "react";

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
    <ul id=" meals">
      {loadedMeals.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
