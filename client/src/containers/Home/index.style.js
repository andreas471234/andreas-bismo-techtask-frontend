import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .check-btn {
    padding-left: 12px;
    padding-right: 12px;
    width: 200px;
  }
  .margin-top-30 {
    margin-top: 8%;
  }
  .error-display {
    margin-top: 12%;
  }
  .date-container{
    display: flex;
    font-size: 14px;
  }
  .date-label{
    padding: 12px 0;
    margin-right: 20px;
    span{
      margin-right: 20px
    }
  }
`