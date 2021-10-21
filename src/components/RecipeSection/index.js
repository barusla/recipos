//import React, {Component} from 'react'
import {RecipeHeader, Bounce, RecipeContainer, RecipeImage, RecipeIngredients, RecipeDescription} from './RecipeElements'
import pic from '../../images/1.jpg'
import chilli from '../../images/chilli.png'


const Recipe = () => {
  return (
    <RecipeContainer>
      <RecipeHeader>
        Bramborový salát<Bounce src={chilli} />
      </RecipeHeader>
        <RecipeDescription>
          Legendární salát z dílny paní Vinšové.
      </RecipeDescription>
      <RecipeImage src={pic} alt="blabla" />
      <RecipeIngredients> tady napisu ingredience
      </RecipeIngredients>
    </RecipeContainer>
  )
}

export default Recipe
