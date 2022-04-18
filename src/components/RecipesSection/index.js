import Recipe from "../../pages/recipe";
import RecipeBoxComponent from "./RecipeBox";
import { RecipesContainer } from "./RecipesElements";

function RecipesComponent(recipes) {
  return (
    <RecipesContainer>
      {recipes.map((recipe) => (
        <RecipeBoxComponent key={recipe.id} recipe={recipe} />
      ))}
    </RecipesContainer>
  );
}

export default RecipesComponent;
