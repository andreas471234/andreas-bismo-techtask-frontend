import React, { Component } from "react"
import { connect } from "react-redux"
import { Container } from "../../components"
import ErrorActions from "../../redux/error/action"
import LoadingActions from "../../redux/loading/action"
import Cookies from "universal-cookie"
import { HomeWrapper } from "./index.style"

const { resetErrorRedux } = ErrorActions
const { resetLoadingRedux } = LoadingActions

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.resetErrorRedux(['SEND_OTP', 'REGISTRATION', 'LOGIN'])
    this.props.resetLoadingRedux(['SEND_OTP', 'REGISTRATION', 'LOGIN'])
  }

  render() {
    return (
      <Container
        loader={false}
      >
        <HomeWrapper>
          test
        </HomeWrapper>
      </Container>
    )
  }
}

export default connect((state) => ({
}), {
  resetErrorRedux,
  resetLoadingRedux,
})(Home)