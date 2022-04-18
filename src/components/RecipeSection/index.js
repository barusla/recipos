import React, { useState } from "react";
import {
  RecipeHeader,
  Bounce,
  RecipeIngredient,
  DirectionsContainer,
  Direction,
  RecipeIngredients,
  RecipeContainer,
} from "./RecipeElements";
import chilli from "../../images/chilli.png";
import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import { GiFireBowl } from "react-icons/gi";
import { Pungency } from "../../config";
const RecipeComponent = (recipe) => {
  const ingredients = Array.from(recipe.ingredients);
  const directions = Array.from(recipe.directions);
  let chilliElements = [];

  for (let i = 0; i < Pungency[recipe.pungency]; i++) {
    chilliElements.push(<Bounce src={chilli} />);
  }
  return (
    <RecipeContainer>
      <HStack justify='center'>
        <RecipeHeader>{recipe.name}</RecipeHeader>
        {chilliElements}
      </HStack>
      <Text textAlign='center'>by {recipe.author_name}</Text>
      <HStack align='flex-start' justify='space-between' pb={4}>
        <RecipeIngredients>
          {ingredients.map((ing) => (
            <RecipeIngredient>
              <Icon as={GiFireBowl} m='0px 10px' color='button' />
              {ing.name} {ing.amount}
              {ing.unit}
            </RecipeIngredient>
          ))}
        </RecipeIngredients>
        <Image
          border='1px solid black'
          borderRadius='32px'
          boxSize='sm'
          src={`/images/${recipe.id}.jpg`}
        />
      </HStack>
      <DirectionsContainer>
        {directions.map((dir) => (
          <Direction>{dir.direction}</Direction>
        ))}
      </DirectionsContainer>
    </RecipeContainer>
  );
};

export default RecipeComponent;
