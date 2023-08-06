import React, { Component } from 'react'

export class Timer extends Component {
    constructor(){
        super()
        this.state={
            time:0
        }
    }
    componentDidMount(){
        this.intervel=setInterval(this.tick,1000);
    }
    tick=()=>{
        this.setState({
            time:this.state.time+1
        })
    }
  render() {
    return (
      <div><h1>{this.state.time}</h1></div>
    )
  }
}

export default Timer