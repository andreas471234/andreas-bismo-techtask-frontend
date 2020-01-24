import styled from "styled-components"
import { ColorPallette } from "../../configs/colorPallete"

export const CardWrapper = styled.div`
  margin: 10px;
  width: 100%;
  padding: 20px;
  font-weight: 700;
  font-size: 14px;
  cursor: ${props => props.cursor || "pointer"};;
  text-align: center;
  color: ${props => props.textColor || ColorPallette.white};
  border-radius: 10px;
  border: 2px solid ${ColorPallette.white};
  background-color: ${props => props.backgroundColor || ColorPallette.lightBlue};
  position: relative;
  display: inline-block;
  &:hover {
    border: 2px solid ${props => props.borderHoverColor || ColorPallette.black};
    .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }
  
  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`