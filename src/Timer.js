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
        if (this.state.minutes === 59){
            this.setState(({ minutes }) => ({
                minutes: minutes - 59
            }))
        }
        else{
            this.setState(({ minutes }) => ({
                minutes: minutes + 1
            }))
        }
        }
    
    incrUpS = () => {
        if (this.state.seconds === 59){
            this.setState(({ seconds }) => ({
                seconds: seconds - 59
            }))
        }
    
        else {
            this.setState(({ seconds }) => ({
                seconds: seconds + 1
            }))
        }
    }


    incrDownH = () => {
        if (this.state.hours === 0){
            this.setState(({ hours }) => ({
                hours: hours
            }))
        }
        else{
            this.setState(({ hours }) => ({
                hours: hours - 1
            }))
        }
        }


   incrDownM = () => {
    if (this.state.minutes === 0){
        this.setState(({ minutes }) => ({
            minutes: minutes + 59
        }))
    }
    else{
        this.setState(({ minutes }) => ({
            minutes: minutes - 1
        }))
    }
    }

    
incrDownS = () => {

    if (this.state.seconds === 0){
        this.setState(({ seconds }) => ({
            seconds: seconds + 59
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
                
                </div>



                <div>
                    <div>{  minutes === 0 && seconds === 0 && hours === 0
                            ? <h1>00:00:00</h1>
                            : <h1>{hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}  <button onClick={isActive ? this.turnOff : this.turnOn}>⏯</button><button onClick={this.reset}>⏹</button></h1>
                        }
                    </div>
                    <div>
                    
                    </div>
                
                </div>



                <div>
                <button onClick={this.incrDownH}><small>⌄&nbsp;&nbsp;</small></button>
                <button onClick={this.incrDownM}><small>⌄&nbsp;</small></button>
                <button onClick={this.incrDownS}><small>&nbsp;&nbsp;⌄</small></button>
                </div>

            </div>
        )
    }


}