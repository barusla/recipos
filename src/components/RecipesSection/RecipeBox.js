import { useState } from "react";
import { BoxHeader, BoxImage, RecipeBox } from "./RecipesElements";
import { Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { GiChiliPepper } from "react-icons/gi";
import { Pungency } from "../../config";
import { Bounce } from "../RecipeSection/RecipeElements";
import { Link } from "react-router-dom";

function RecipeBoxComponent({ recipe }) {
  let chilliElements = [];
  for (let i = 0; i < Pungency[recipe.pungency]; i++) {
    chilliElements.push(<Icon as={GiChiliPepper} color='red.700' />);
  }
  return (
    <Link to={"/recipes/" + recipe.id}>
      <RecipeBox>
        <BoxImage src={`/images/${recipe.id}.jpg`} />
        <BoxHeader>{recipe.name}</BoxHeader>
        <Heading fontSize='1 rem'>{chilliElements}</Heading>
      </RecipeBox>
    </Link>
  );
}

export default RecipeBoxComponent;
