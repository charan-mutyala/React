import React from "react";

const UpdatedComponent = OriginalComponent =>{ //updated component for our original component

    //OriginalComponent - HoverCount.js,Count.js(The files where we are using hoc)

    class NewComponent extends React.Component{

        // common code in two files HoverCount.js and Count.js
        constructor(){
            super();
            this.state = {
                count:0
            }
        }

        incrementCount = ()=>{
            this.setState(prevState=>{
                return{count:prevState.count+1}
            })
        }
        // End of common code

        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
        }

    }
    return NewComponent;

}

export default UpdatedComponent;