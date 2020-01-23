import styled from "styled-components"
import { ColorPallette } from "../../configs/colorPallete"

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: ${props => props.borderRadius || '24px'};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  border: none;
  color: ${props => props.textColor || ColorPallette.darkGrey};
  background-color: ${props => props.backgroundColor || ColorPallette.primary};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${ColorPallette.secondary};
    color: ${ColorPallette.hoverTextColor};
  }
`