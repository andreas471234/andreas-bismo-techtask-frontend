import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { BottomTabsWrapper } from './index.style';
import { ImageUrl } from '../../images';

class BottomTabs extends Component {
  render() {
    return (
      <BottomTabsWrapper>
        Made By Andreas Bismo
      </BottomTabsWrapper>
    );
  }
}

export default withRouter(BottomTabs);