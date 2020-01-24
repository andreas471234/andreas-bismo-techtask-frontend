import React, { Component } from "react"
import { RecipeCardWrapper } from "./index.style"

class RecipeCard extends Component {
  render() {
    const { item, key } = this.props

    return (
      <RecipeCardWrapper key={key}>
        <h3>{item.title}</h3>
        <hr />
        {
          item.ingredients.map((i, index) => 
            <React.Fragment key={index}>
              {i}
              <br />
            </React.Fragment>
          )
        }
      </RecipeCardWrapper>
    )
  }
}

export default RecipeCard
