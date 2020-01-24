import styled from "styled-components"
import { ColorPallette } from "../../configs/colorPallete"

export const RecipeCardWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  padding: 20px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${ColorPallette.white};
  border-radius: 10px;
  background-color: ${ColorPallette.darkGreen};
  position: relative;
  display: inline-block;
  h3 {
    margin-top: 0;
    color: ${ColorPallette.black};
  }
`