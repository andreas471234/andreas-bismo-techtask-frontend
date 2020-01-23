import React, { Component } from "react"
import { connect } from "react-redux"
import { ContainerWrapper } from "./index.style"
import Loader from "../Loader"
import BottomTabs from "../BottomTabs"

class Container extends Component {
  render() {
    const { children, loader } = this.props

    return (
      <ContainerWrapper>
        <Loader visible={!!loader}>
          <center className="header">Recipe Searcher</center>
          <div className="body">
            {children}
          </div>
          <BottomTabs />
        </Loader>
      </ContainerWrapper>
    )
  }
}

export default connect((state) => ({
}))(Container)
