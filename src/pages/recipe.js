import React, {useEffect, useState} from 'react';
import NotFoundComponent from '../components/globalComponents/notFound';
import RecipeComponent from '../components/RecipeSection';


function Recipe({ match }) {
  useEffect(() =>{
    fetchRecipe();
  }, []);

  const [recipe, setRecipe] = useState({
    ingredients: {}
  });

  const fetchRecipe = async () => {
    let recipeJson ;
    try{
      const recipeData = await fetch(`http://127.0.0.1:5000/recipes/${match.params.id}`);
      recipeJson = await recipeData.json();
    }
    catch(error){
      recipeJson = null;
    }
    setRecipe(recipeJson);
  };


  if (recipe == null){
    return NotFoundComponent();
  }
  return RecipeComponent(recipe);
}

export default Recipe
