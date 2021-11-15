import React from 'react';
import {RecipeHeader, Bounce, RecipeInfo, RecipeContainer, RecipeImage, RecipeIngredients, RecipeDescription} from './RecipeElements'
import pic from '../../images/1.jpg'
import chilli from '../../images/chilli.png'


const RecipeComponent = (recipe) => {
  return (
    <RecipeContainer>
      <RecipeHeader>
        {recipe.name}<Bounce src={chilli} /><Bounce src={chilli} />
      </RecipeHeader>
        <RecipeDescription>
          Legendární salát z dílny paní Vinšové.
      </RecipeDescription>
      <RecipeInfo>
        <RecipeIngredients> tady napisu ingredience
        </RecipeIngredients>
        <RecipeImage src={pic} alt="obrazok" />
      </RecipeInfo>
    </RecipeContainer>
  )
}

export default RecipeComponent
