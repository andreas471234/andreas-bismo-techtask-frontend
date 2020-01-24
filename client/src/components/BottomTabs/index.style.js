import styled from "styled-components"
import { ColorPallette } from "../../configs/colorPallete"

export const BottomTabsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: ${ColorPallette.primary};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 12px 0;
  font-size: 14px;
  color: ${ColorPallette.black}
`