import React, { Component } from 'react'

export default class Stopwatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            hours: 0,
            minutes: 0, 
            seconds: 0,
            displayStopwatch: props.displayStopwatch
            }
    }
    componentDidUpdate(prevProps){
        if (prevProps.displayStopwatch !== this.props.displayStopwatch){
            this.setState(() => ({
                displayStopwatch: prevProps.displayStopwatch
            }))
        }
    }
    startTimer() {
        this.myInterval = setInterval(() => {
            const {minutes, seconds } = this.state

            if ((seconds === 0 && minutes === 0 ) || (seconds === 0 && minutes === 59) || (seconds === 0 && minutes === 1) ){
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }))
            } else{ 

                if (seconds > 0 && seconds < 59 ) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds + 1
                    }))
                }
                
                if (seconds === 59) {
                        this.setState(({ minutes }) => ({
                            minutes: minutes + 1,
                            seconds: 0
                        }))
                    }
              
                if (minutes === 59 && seconds === 59){
                    this.setState(({ hours }) => ({
                        hours: hours + 1, 
                        minutes: 0,
                        seconds: 0
                    }))
                }
                }
             
    }, 1000)    
    }

    componentWillUnmount() {
        // destroyed
        clearInterval(this.myInterval)
    }

    reset = () => {
        clearInterval(this.myInterval)
        this.setState({
            isActive: false,
            hours: 0,
            minutes: 0, 
            seconds: 0
        })
    }

    turnOn = () => {
        this.startTimer()
        this.setState(() => ({
            isActive: true
        }))
    }

    turnOff = () => {
        clearInterval(this.myInterval)
        this.setState(() => ({
            isActive: false
        }))
    }
        

    render() {
        if (this.props.displayStopwatch){
        const {isActive, hours, minutes, seconds } = this.state
        return (
            <div>
                <div>
                    <div>{  <h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}  
                                <button onClick={isActive ? this.turnOff : this.turnOn}>⏯</button>
                                <button onClick={this.reset}>⏹</button>
                            </h1>
                        }
                    </div>
                    <div>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}
}