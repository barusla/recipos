import styled from "styled-components";
import { tada } from "react-animations";
import { keyframes } from "styled-components";
import { buttonColor, fontColor } from "../../config";

export const Bounce = styled.img`
  animation: 2s ${keyframes`${tada}`} infinite;
  height: 1%;
  width: 1%;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;

  margin-right: 5%;
  margin-left: 5%;
  padding-right: 10%;
  padding-left: 10%;
`;

export const RecipeHeader = styled.header`
  color: ${fontColor};
  font-size: 3rem;
  margin-top 20px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  margin-top: 1%;
`;

export const RecipeImage = styled.img`
  justify-content: right;
  margin-top: 30px;
  margin-bottom: 30px;
  right: 15%;
  width: 35%;
`;
export const RecipeIngredients = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 0px;
`;
export const RecipeIngredient = styled.li`
  font-size: 1.5rem;
  list-style-type: none;
  list-style-position: inside;
  color: ${fontColor};
`;

export const RecipeDescription = styled.sub`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: ${fontColor};
  padding: 24px;
  font-style: italic;
`;

export const DirectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const Direction = styled.li`
  padding: 8px;
  list-style: numeric;
  list-style-position: inside;
`;
