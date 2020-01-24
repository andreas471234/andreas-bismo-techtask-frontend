import styled from "styled-components";
import { ColorPallette } from "../../configs/colorPallete"

export const HomeWrapper = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .btn {
    padding-left: 12px;
    padding-right: 12px;
    width: 200px;
  }
  .check-btn {
    background-color: ${ColorPallette.pink};
    color: ${ColorPallette.darkerGrey}
  }
  .check-btn:hover {
    background-color: ${ColorPallette.yellow};
    color: ${ColorPallette.white}
  }
  .recipe-btn:hover {
    color: ${ColorPallette.white}
  }
  .margin-top-30 {
    margin-top: 8%;
  }
  .error-display {
    margin-top: 12%;
  }
  .date-container {
    display: flex;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .date-label{
    padding: 12px 0;
    margin-right: 20px;
    span{
      margin-right: 20px
    }
  }
  .ingredient-row{
    display: flex;
    justify-content: space-around;
  }
  .ingredient-list {
    margin: 20px 0;
  }
  .recipe-list {
    margin: 20px 0;
    display: block;
  }
`