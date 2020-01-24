import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Button, Card, RecipeCard } from "../../components"
import CookActions from "../../redux/cook/action"
import ErrorActions from "../../redux/error/action"
import LoadingActions from "../../redux/loading/action"
import { HomeWrapper } from "./index.style"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"

const { getIngredientList, getRecipeList } = CookActions
const { resetErrorRedux } = ErrorActions
const { resetLoadingRedux } = LoadingActions

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cookDate: moment().toDate(),
      chosenIngredients: [],
      showIngredientList: false,
      showRecipeList: false,
    }
  }

  componentDidMount() {
    this.props.resetErrorRedux(['GET_INGREDIENT_LIST'])
    this.props.resetLoadingRedux(['GET_INGREDIENT_LIST'])
  }

  handleChange = date => {
    this.setState({
      cookDate: date,
      showIngredientList: false,
    });
  };

  getIngredients = () => {
    this.setState({
      chosenIngredients: [],
      showIngredientList: true,
      showRecipeList: false,
    },
      () => this.props.getIngredientList()
    )
  }

  getRecipe = () => {
    const { chosenIngredients } = this.state
    this.setState({
      showIngredientList: false,
      showRecipeList: true,
    },
      () => this.props.getRecipeList({ query: { ingredients: chosenIngredients.join(',') }})
    )
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

  renderRecipe() {
    const { recipeList } = this.props
    if (!Array.isArray(recipeList)) {
      return <div></div>
    }

    return <div className="recipe-list">
      {
        recipeList.map((item, index) =>
          <RecipeCard item={item} key={index}/>
        )
      }
    </div>
  }

  render() {
    const {
      showIngredientList,
      showRecipeList,
      chosenIngredients,
    } = this.state
    const {
      getIngredientsLoading,
    } = this.props

    return (
      <Container
        loader={getIngredientsLoading}
      >
        <HomeWrapper>
          <div className="header-container">
            <div className="date-container">
              <div className="date-label">
                <span>Choose cooking date:</span>
                <DatePicker
                  selected={this.state.cookDate}
                  onChange={this.handleChange}
                  dateFormat={"yyyy-MM-dd"}
                />
              </div>
              <Button className="btn check-btn" onClick={e => this.getIngredients()}>
                Check Ingredients
              </Button>
            </div>
            {
              chosenIngredients.length > 0 &&
              !!showIngredientList &&
              <Button className="btn recipe-btn" onClick={e => this.getRecipe()}>
                Get Recipe
              </Button>
            }
          </div>
          {!!showIngredientList && this.renderIngredients()}
          {!!showRecipeList && this.renderRecipe()}
        </HomeWrapper>
      </Container>
    )
  }
}

export default connect((state) => ({
  ingredientList: state.Cook.ingredientList,
  recipeList: state.Cook.recipeList,
  
  getIngredientsLoading: state.Loading.GET_INGREDIENT_LIST,
}), {
  getIngredientList,
  getRecipeList,
  resetErrorRedux,
  resetLoadingRedux,
})(Home)