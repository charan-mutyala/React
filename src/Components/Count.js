import React, { Component } from 'react'
import UpdatedComponent from '../WithCounter';


class Count extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         count:0
    //     }
    // }

    // incrementCount = ()=>{
    //     this.setState({
    //        count:this.state.count+1
    //     })
    // }

    // incrementCount = ()=>{
    //     this.setState(prevState=>{
    //       return {count:prevState.count+1}
    //     })
    // }

  render() {

    const{count,incrementCount} = this.props

    return (
        <center>
      <div>
        {/* <button onClick={this.incrementCount}>Click {this.state.count} times</button> */}
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
      </center>
    )
  }
}

export default UpdatedComponent(Count);