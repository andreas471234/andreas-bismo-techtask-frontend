import styled from "styled-components";

export const LoaderWrapper = styled.div`
  .loader-image-container {
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    min-height: 100vh;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  .loader-image {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`