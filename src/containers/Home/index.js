import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Button } from "../../components"
import CookActions from "../../redux/cook/action"
import ErrorActions from "../../redux/error/action"
import LoadingActions from "../../redux/loading/action"
import { HomeWrapper } from "./index.style"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"

const { getIngredientList } = CookActions
const { resetErrorRedux } = ErrorActions
const { resetLoadingRedux } = LoadingActions

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cookDate: moment().toDate()
    }
  }

  componentDidMount() {
    this.props.resetErrorRedux(['SEND_OTP', 'REGISTRATION', 'LOGIN'])
    this.props.resetLoadingRedux(['SEND_OTP', 'REGISTRATION', 'LOGIN'])
  }

  handleChange = date => {
    this.setState({
      cookDate: date
    });
  };

  getIngredients = () => {
    const { ingredientList } = this.props
    console.log("get ajax")
    this.props.getIngredientList()
    console.log(moment(this.state.cookDate).format("YYYY-MM-DD"))
    console.log(ingredientList)
  }

  render() {
    return (
      <Container
        loader={false}
      >
        <HomeWrapper>
          <div className="date-container">
            <div className="date-label">
              <span>Choose cooking date:</span>
              <DatePicker
                selected={this.state.cookDate}
                onChange={this.handleChange}
                dateFormat={"yyyy-MM-dd"}
              />
            </div>
            <Button className="check-btn" onClick={e => this.getIngredients()}>
              Check Ingredients
            </Button>
          </div>
        </HomeWrapper>
      </Container>
    )
  }
}

export default connect((state) => ({
  ingredientList: state.Cook.ingredientList,
}), {
  getIngredientList,
  resetErrorRedux,
  resetLoadingRedux,
})(Home)