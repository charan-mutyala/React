// import React ,{useState} from 'react'

// function HoverCount() {

//     const [count,setCount] = useState(0);

//     function incrementCount(){
//         setCount(count+1);
//     }  

//   return (
//     <center>
    
//         <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
   
//     </center>
//   )
// }

// export default HoverCount

import React, { Component } from 'react'
import UpdatedComponent from '../WithCounter';

class HoverCount extends Component {

        // constructor(){
        //     super();
        //     this.state = {
        //         count:0
        //     }
        // }

        // incrementCount = ()=>{
        //     this.setState(prevState=>{
        //         return{count:prevState.count+1}
        //     })
        // }

  render() {
    const{count,incrementCount} = this.props
    return (
        <center>    
        <div>
        {/* <h2 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h2> */}
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
      </center>

    )
  }
}

export default UpdatedComponent(HoverCount);