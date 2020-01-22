import styled from 'styled-components';

const DashAppHolder = styled.div`
  font-family: Ariel;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {}

  .ant-row {
    ${'' /* margin-left: -8px;
    margin-right: -8px; */};
  }

  .ant-row > div {
    padding: 0;
  }
  .ant-timeline-item-head {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 100px;
    border: 10px solid #3DAB37;
    font-size: 15px;
  }
  .ant-timeline-item-tail{
    position: absolute;
    left: 8px;
    top: 0.75em;
    height: 100%;
    border-left: 2px solid #e8e8e8;
  }
  .ant-timeline-item-content{
    margin: 0px 4px 2px 40px;
    position: relative;
    top: 0px;
  }

  .isoLeftRightComponent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .isoCenterComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .ant-steps-item-title {
    font-size: 12px;
  }
  .responsive-detail-img {
    width: 100%;
    height: auto;
  }
  .filter-date-range input{
    background: #fff !important;
  }
`;

export default DashAppHolder;
