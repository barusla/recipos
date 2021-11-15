import React, {useEffect, useState} from 'react';
import RecipeComponent from '../components/RecipeSection';


function Recipe({ match }) {
  useEffect(() =>{
    fetchRecipe();
    console.log(match.params.id)
  }, []);

  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async () => {
    const recipeData = await fetch(`http://127.0.0.1:5000/recipes/${match.params.id}`);
    const recipeJson = await recipeData.json();
    setRecipe(recipeJson);
  };


  return (
    RecipeComponent(recipe)
  )
}

export default Recipe
