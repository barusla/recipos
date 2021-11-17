import React from 'react';
import {RecipeHeader, Bounce, RecipeInfo, RecipeContainer, RecipeImage, RecipeIngredients, RecipeDescription, RecipeIngredient} from './RecipeElements'
import pic from '../../images/1.jpg'
import chilli from '../../images/chilli.png'

const RecipeComponent = (recipe) => {
  let ingredientsElements = [];
  for (let idx = 0; idx < recipe.ingredients.length; idx++) {
    const ing = recipe.ingredients[idx];
    ingredientsElements.push(
      <RecipeIngredient>
      {ing.name} {ing.amount} {ing.unit}
      </RecipeIngredient>
    )
  }
  return (
    <RecipeContainer>
      <RecipeHeader>
        {recipe.name}<Bounce src={chilli} /><Bounce src={chilli} />
      </RecipeHeader>
        <RecipeDescription>
          Legendární salát z dílny paní Vinšové.
      </RecipeDescription>
      <RecipeInfo>
        <RecipeIngredients>
        {ingredientsElements}
        </RecipeIngredients>
        <RecipeImage src={pic} alt="obrazok" />
      </RecipeInfo>
    </RecipeContainer>
  )
}

export default RecipeComponent
