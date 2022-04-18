import styled from "styled-components";
import { buttonColor, fontColor } from "../../config";

export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-right: 5%;
  margin-left: 5%;
`;

export const RecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 16px;
`;

export const BoxImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  align-self: center;
  border-radius: 8px;

  width: 300px;
  height: 200px;
`;
export const BoxHeader = styled.header`
  color: ${fontColor};
  font-size: 1 rem;
  align-self: center;
  margin-top: 8px;
`;
