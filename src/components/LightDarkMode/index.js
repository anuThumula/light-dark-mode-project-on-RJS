// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
  }

  onDarkModeSet = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getBtn = () => {
    const {isLightMode} = this.state
    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {isLightMode} = this.state
    const cardClass = isLightMode ? 'light-mode' : 'dark-mode'
    const headingClass = isLightMode
      ? 'heading-light-mode'
      : 'heading-dark-mode'

    const btnText = this.getBtn()
    return (
      <div className="bg-cont">
        <div className={`container ${cardClass}`}>
          <h1 className={`heading ${headingClass}`}>Click To Change Mode</h1>
          <div className="button-cont">
            <button
              className="button"
              type="button"
              onClick={this.onDarkModeSet}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
