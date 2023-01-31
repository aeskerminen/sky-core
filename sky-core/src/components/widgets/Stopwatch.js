import React, { Component } from "react";
import { PAUSE_ICON, PLAY_ICON, STOP_ICON } from "../../helpers/icons";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state;

      if (
        (seconds === 0 && minutes === 0) ||
        (seconds === 0 && minutes === 59) ||
        (seconds === 0 && minutes !== 0)
      ) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      } else {
        if (seconds > 0 && seconds < 59) {
          this.setState(({ seconds }) => ({
            seconds: seconds + 1,
          }));
        }

        if (seconds === 59) {
          this.setState(({ minutes }) => ({
            minutes: minutes + 1,
            seconds: 0,
          }));
        }

        if (minutes === 59 && seconds === 59) {
          this.setState(({ hours }) => ({
            hours: hours + 1,
            minutes: 0,
            seconds: 0,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    // destroyed
    clearInterval(this.myInterval);
  }

  reset = () => {
    clearInterval(this.myInterval);
    this.setState({
      isActive: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  turnOn = () => {
    this.startTimer();
    this.setState(() => ({
      isActive: true,
    }));
  };

  turnOff = () => {
    clearInterval(this.myInterval);
    this.setState(() => ({
      isActive: false,
    }));
  };

  render() {
    if (this.props.displayStopwatch) {
      const { isActive, hours, minutes, seconds } = this.state;
      return (
        <div className="flex flex-row gap-x-2 bg-white rounded-md shadow-md p-1 ">
          <h1 className="pt-0.5">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div>
            <button
              className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white mr-0.5 p-1"
              onClick={isActive ? this.turnOff : this.turnOn}
            >
              {isActive ? <PAUSE_ICON /> : <PLAY_ICON />}
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white p-1"
              onClick={this.reset}
            >
              <STOP_ICON />
            </button>
          </div>
        </div>
      );
    }
  }
}
