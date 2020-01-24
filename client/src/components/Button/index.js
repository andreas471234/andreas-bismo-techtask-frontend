import React, { Component } from "react"
import { ButtonWrapper } from "./index.style"

class Button extends Component {
  render() {
    const { color, backgroundColor, handleClick, children, borderRadius, className, ...props } = this.props
    return (
      <ButtonWrapper
        className={className}
        textColor={color}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        onClick={handleClick}
        {...props}
      >
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button
