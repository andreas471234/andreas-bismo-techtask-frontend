import React, { Component } from "react"
import { LoaderWrapper } from "./index.style"
import { ImageUrl } from "../../images"

class Loader extends Component {
  render() {
    const { visible, children } = this.props
    return (
      <LoaderWrapper>
        {
          visible &&
          <div className="loader-image-container">
            <img src={ImageUrl.loadingGif} className="loader-image" alt="loader" />
          </div>
        }
        {
          children
        }
      </LoaderWrapper>
    )
  }
}

export default Loader