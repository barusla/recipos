import styled from 'styled-components'
import {fontColor} from '../../config'
import { tada } from 'react-animations';
import {keyframes} from "styled-components";

export const NotFoundHeader = styled.header`
  display: flex;
  justify-content: center;
  color: ${fontColor};
  font-size: 4rem;
  margin-top: 15%;

`
export const Bounce = styled.img`
  position: relative;
  width: 5%;
  height: 5%;
  margin-left: 1.5%;
  margin-right: 2.9%;

  animation: 2s ${keyframes`${tada}`} infinite;
`