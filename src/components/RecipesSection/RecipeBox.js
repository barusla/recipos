import { BoxHeader, BoxImage, RecipeBox } from "./RecipesElements";
import { Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function RecipeBoxComponent({ recipe }) {
  return (
    <Link to={"/recipes/" + recipe.id}>
      <RecipeBox>
        <BoxImage src={`/images/${recipe.id}.jpg`} />
        <BoxHeader>{recipe.name}</BoxHeader>
      </RecipeBox>
    </Link>
  );
}

export default RecipeBoxComponent;
