import React, { Component } from "react";
import { PAUSE_ICON, PLAY_ICON, STOP_ICON } from "../../helpers/icons";

export default class Timer extends Component {
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
      const { hours, minutes, seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0 && hours === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
      if (minutes === 0 && hours != 0) {
        this.setState(({ hours }) => ({
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      }

      if (seconds === 0 && minutes === 0 && hours === 0) {
        this.setState(() => ({ isActive: false }));
        window.alert("Time is up!");
      }
    }, 1000);
  }

  componentWillUnmount() {
    // destroyed
    clearInterval(this.myInterval);
  }

  reset = () => {
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
    if (this.props.displayTimer) {
      const { isActive, hours, minutes, seconds } = this.state;
      return (
        <div className="flex flex-row gap-x-2 bg-white rounded-md shadow-md p-1">
          <div className="flex flex-row">
            <input
              className="w-12"
              type={"number"}
              value={hours < 10 ? "0" + hours : hours}
              min={0}
              onChange={(e) => {
                this.setState(() => ({
                  hours: e.target.value,
                }));
              }}
            ></input>
            <span>:</span>
            <input
              className="w-12"
              type={"number"}
              value={minutes < 10 ? "0" + minutes : minutes}
              min={0}
              max={59}
              onChange={(e) => {
                this.setState(() => ({
                  minutes: e.target.value,
                }));
              }}
            ></input>
            <span>:</span>
            <input
              className="w-12"
              type={"number"}
              value={seconds < 10 ? "0" + seconds : seconds}
              min={0}
              max={59}
              onChange={(e) => {
                this.setState(() => ({
                  seconds: e.target.value,
                }));
              }}
            ></input>
          </div>
          <div>
            <button
              className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white mr-0.5 p-1"
              onClick={isActive ? this.turnOff : this.turnOn}
            >
              {isActive ? <PAUSE_ICON /> : <PLAY_ICON />}
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 shadow-md rounded-md text-white mr-0.5 p-1"
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
