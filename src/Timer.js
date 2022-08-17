import React, { Component } from 'react'

export default class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            hours: 1,
            minutes: 0, 
            seconds: 0
            }
    }
   

    componentDidMount() {
        //initialized
       this.startTimer()
       clearInterval(this.myInterval)
    }

    startTimer() {
        this.myInterval = setInterval(() => {
            const { hours, minutes, seconds } = this.state


            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {

                if (minutes === 0 && hours === 0) {
                    clearInterval(this.myInterval)
                } 
            
                else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
            if (minutes === 0 && hours != 0){
                this.setState(({ hours }) => ({
                    hours: hours - 1,
                    minutes: 59,
                    seconds: 59
                }))
            }
    
    }, 1000)    
    }


    componentDidUpdate(){
        // state updated
        
    }

    componentWillUnmount() {
        // destroyed
        clearInterval(this.myInterval)
    }

    reset = () => {
        this.setState({
            isActive: false,
            hours: 0,
            minutes: 0, 
            seconds: 0
        })
    }





    
    turnOn = () => {
        this.startTimer()
        this.setState(({ isActive }) => ({
            isActive: true
        }))
    }

    turnOff = () => {
        clearInterval(this.myInterval)
        this.setState(({ isActive }) => ({
            isActive: false
        }))
    }






    incrUpH = () => {
        this.setState(({ hours }) => ({
            hours: hours + 1
        }))
    }
    incrUpM = () => {
        this.setState(({ minutes }) => ({
            minutes: minutes + 1
        }))
    }
    incrUpS = () => {
        this.setState(({ seconds }) => ({
            seconds: seconds + 1
        }))
    }

// can't be negative fix!!

    incrDownH = () => {
        if (this.hours != 0) {
        this.setState(({ hours }) => ({
            hours: hours - 1
        }))
    }
    }

//can't be over 60
   incrDownM = () => {
        this.setState(({ minutes }) => ({
            minutes: minutes - 1
        }))
    }
//can't be over 60
    incrDownS = () => {

    if (this.seconds === 0){
        this.setState(({ seconds }) => ({
            seconds: 59
        }))
    }
    else if (this.seconds === 59){
        this.setState(({ seconds }) => ({
            seconds: 0
        }))
    }
    else {
        this.setState(({ seconds }) => ({
            seconds: seconds - 1
        }))
    }
    }

    render() {
        const {isActive, hours, minutes, seconds } = this.state
        return (
             

            <div>
                <div>
                <button onClick={this.incrUpH}><small>⌃&nbsp;&nbsp;</small></button>
                <button onClick={this.incrUpM}><small>⌃&nbsp;</small></button>
                <button onClick={this.incrUpS}><small>&nbsp;&nbsp;⌃</small></button>
                {/* <button onClick={this.turnOn}>start</button>
                <button onClick={this.reset}>reset</button> */}
                </div>



                <div>
                    <div>{  minutes === 0 && seconds === 0 && hours === 0
                            ? <h1>00:00:00</h1>
                            : <h1>{hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}  <button onClick={isActive ? this.turnOff : this.turnOn}>⏯</button></h1>
                        }
                    </div>
                    <div>
                    
                    </div>
                
                </div>


                {/* <button onClick={this.reset}>reset</button> */}

                <div>
                <button onClick={this.incrDownH}><small>⌄&nbsp;&nbsp;</small></button>
                <button onClick={this.incrDownM}><small>⌄&nbsp;</small></button>
                <button onClick={this.incrDownS}><small>&nbsp;&nbsp;⌄</small></button>
                </div>

            </div>
        )
    }


}