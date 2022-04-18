import React, { useEffect, useState } from "react";
import NotFoundComponent from "../components/globalComponents/notFound";
import { API } from "../config";
import RecipesComponent from "../components/RecipesSection";

const Recipes = () => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    let recipesJson;
    try {
      const recipesData = await fetch(`${API}recipes`);
      recipesJson = await recipesData.json();
    } catch (error) {
      recipesJson = null;
    }
    setRecipes(recipesJson);
  };
  if (recipes == null) {
    return NotFoundComponent();
  }
  if (recipes.length) {
    return RecipesComponent(recipes);
  } else {
    return [];
  }
};

export default Recipes;
