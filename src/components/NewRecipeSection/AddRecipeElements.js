import styled from "styled-components";
import { buttonColor, panelColor, fontColor } from "../../config";

export const AddRecipeContainer = styled.div``;

export const AddRecipeHeader = styled.header`
  display: flex;
  justify-content: center;
  color: ${fontColor};
  font-size: 2rem;
  padding: 12px;
  margin-right: 10px;
  margin-top: 20px;
`;
export const AddRecipeForm = styled.form``;

export const AddRecipeInputGroup = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 30px;
`;

export const AddRecipeLabel = styled.label`
  color: ${fontColor};
  width: 50%;
`;

export const AddRecipeInput = styled.input`
  width: 50%;
  border: 1px groove black;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${buttonColor};
  }
`;

export const AddRecipeSelect = styled.select`
  width: 51%;
  background: white;
  border: 1px groove black;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${buttonColor};
  }
`;
export const ListTableStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  border-radius: 16px;
  padding: 16px;
`;

export const TableStackHeading = styled.header`
  padding: 4px;
  font-size: 24px;
  font-weight: bold;
  color: ${fontColor};
  text-align: center;
`;
