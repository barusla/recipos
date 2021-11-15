import styled from 'styled-components';
import { tada } from 'react-animations';
import {keyframes} from "styled-components";
import { backgroundColor, panelColor, fontColor, buttonColor } from '../../config'

export const Bounce = styled.img`
  position: relative;
  width: 1%;
  height: 1%;
  margin-top: 10px ;
  padding: 6px;

  animation: 2s ${keyframes`${tada}`} infinite;
`

export const RecipeContainer = styled.div`

  `

export const RecipeHeader = styled.header`
  display: flex;
  justify-content: center;
  color: ${fontColor};
  font-size: 3rem;
  padding: 12px;
  margin-right: 10px ;
  margin-top: 70px ;

  /* font-weight: bold; */

`

export const RecipeInfo = styled.div`
  display: flex;
`

export const RecipeImage = styled.img`
  justify-content: right;
  position: absolute;
  margin-top: 30px;
  right: 5%;
  width: 35%;
`
export const RecipeIngredients = styled.li`
  position: absolute;
  font-size: 1.5rem;
  margin-top: 30px;
  left: 40px;
  /* font-weight: bold; */
  //font-family: cursive;
  //font-style: italic;
    
`
export const RecipeDescription =styled.sub`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: ${fontColor};
  padding: 12px;
  font-style: italic;
`

 
