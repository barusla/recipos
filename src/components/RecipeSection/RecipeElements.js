import styled from 'styled-components';
import { bounce } from 'react-animations';
import {keyframes} from "styled-components";

export const Bounce = styled.img`
  position: relative;
  width: 4%;
  padding: 24px;

  animation: 2s ${keyframes`${bounce}`} infinite;
`

export const RecipeContainer = styled.div`
  background: linear-gradient(hotpink, pink);
  height: 800px;
  

`

export const RecipeHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 6rem;
  padding: 24px;
  /* font-weight: bold; */
  //font-family: cursive;
  //font-style: italic;
`

export const RecipeImage = styled.img`
  position: relative;
  width: 40%;
  padding: 24px;
`
export const RecipeIngredients = styled.li`
  position: absolute;
  top: 350px;
  left: 630px;
  width: 100%;
  //display: flex;
  //justify-self: right;
  font-size: 2rem;
  padding: 24px;
  /* font-weight: bold; */
  //font-family: cursive;
  //font-style: italic;
    
`
export const RecipeDescription =styled.sub`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 24px;
  /* font-weight: bold; */
`

 
