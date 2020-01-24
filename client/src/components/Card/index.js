import React, { Component } from "react"
import { CardWrapper } from "./index.style"
import { ColorPallette } from "../../configs/colorPallete"
import moment from "moment"

class Card extends Component {
  render() {
    const { item, cookDate, key, chosenIngredients, clickEvent } = this.props
    let textColor = ColorPallette.white
    let backgroundColor = ColorPallette.lightBlue
    let borderHoverColor = ColorPallette.black
    let today = moment(cookDate)
    let expireDate = moment(item['use-by'])
    let cursor = "pointer"
    
    if (today.diff(expireDate, 'days') >= 0) {
      backgroundColor = ColorPallette.darkerGrey
      borderHoverColor = ColorPallette.white
      cursor = "default"
    } else if (chosenIngredients.indexOf(item.title) !== -1) {
      backgroundColor = ColorPallette.purple
    }

    return (
      <CardWrapper
        onClick={clickEvent}
        textColor={textColor}
        backgroundColor={backgroundColor}
        borderHoverColor={borderHoverColor}
        cursor={cursor}
        key={key}
        title={item['use-by']}
        className="tooltip"
      >
        {item.title}
        <span className="tooltiptext">Expired Date: {item['use-by']}</span>
      </CardWrapper>
    )
  }
}

export default Card
