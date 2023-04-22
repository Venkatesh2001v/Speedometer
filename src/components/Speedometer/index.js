// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncreaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-app-container">
        <div className="bg-container">
          <h1 className="heading">Speedometer</h1>
          <img
            className="image"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="speed">Speed Is {speed}mph</h1>
          <p className="indication">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              onClick={this.onIncreaseSpeed}
              className="accelerate-button"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onDecreaseSpeed}
              className="brake-button"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
