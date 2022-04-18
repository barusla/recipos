import React, { useEffect, useState } from "react";
import NotFoundComponent from "../components/globalComponents/notFound";
import RecipeComponent from "../components/RecipeSection";
import { API } from "../config";

function Recipe({ match }) {
  useEffect(() => {
    fetchRecipe();
  }, []);

  const [recipe, setRecipe] = useState({
    ingredients: {},
    directions: {},
  });

  const fetchRecipe = async () => {
    let recipeJson;
    try {
      const recipeData = await fetch(`${API}recipes/${match.params.id}`);
      recipeJson = await recipeData.json();
    } catch (error) {
      recipeJson = null;
    }
    setRecipe(recipeJson);
  };

  if (recipe == null) {
    return NotFoundComponent();
  }
  return RecipeComponent(recipe);
}

export default Recipe;
