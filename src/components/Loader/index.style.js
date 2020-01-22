import styled from "styled-components";

export const LoaderWrapper = styled.div`
  .loader-image-container {
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 450px;
    z-index: 1;
  }
  .loader-image {
    position: absolute;
    top: 50%;
    left: 40%;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`