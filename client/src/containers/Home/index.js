import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Button, Card } from "../../components"
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
      cookDate: moment().toDate(),
      chosenIngredients: [],
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
    this.props.getIngredientList()
  }

  handleClick = (item, cookDate) => {
    const { chosenIngredients } = this.state
    let ingredientArray = chosenIngredients
    let index = ingredientArray.indexOf(item.title);
    let today = moment(cookDate)
    let expireDate = moment(item['use-by'])

    if (!!item.title && expireDate.diff(today, 'days') > 0) {
      if (index === -1) {
        ingredientArray.push(item.title)
      } else {
        ingredientArray.splice(index, 1)
      }
    }

    this.setState({
      chosenIngredients: ingredientArray
    })
  }

  renderIngredients() {
    const { chosenIngredients, cookDate } = this.state
    const { ingredientList } = this.props
    if (!Array.isArray(ingredientList)) {
      return <div></div>
    }

    let list = []
    let dateChosen = moment(cookDate).format("YYYY-MM-DD")

    for (let i = 0; i < Math.ceil(ingredientList.length/4); i++) {
      list.push(<div className="ingredient-row">
        {
          ingredientList.slice(i * 4, (i + 1) * 4).map((item, index) =>
            <Card item={item} cookDate={dateChosen} key={index} chosenIngredients={chosenIngredients} clickEvent={e => this.handleClick(item, dateChosen)}/>
          )
        }
      </div>)
    }

    return <div className="ingredient-list">
      {list}
    </div>
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
          {this.renderIngredients()}
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