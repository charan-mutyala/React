import React, { Component } from 'react'

class ClassComponentCounter extends Component {
    constructor(){
        super()
            this.state={
                count:0
            
        }
    }
    componentDidMount(){
    document.title=`Count ${ this.state.count}Time`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            console.log("updating Document");
            document.title=`Count ${ this.state.count}Time`

        }
    }
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/><br />
        
        <button onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassComponentCounter