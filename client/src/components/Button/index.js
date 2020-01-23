import React, { Component } from "react"
import { ButtonWrapper } from "./index.style"

class Button extends Component {
  render() {
    const { text, color, backgroundColor, handleClick, disabled, children, borderRadius, ...props } = this.props
    return (
      <ButtonWrapper textColor={color} backgroundColor={backgroundColor} borderRadius={borderRadius} onClick={handleClick} disabled={disabled} {...props}>
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button
