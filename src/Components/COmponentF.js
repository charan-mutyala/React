import React, { Component } from 'react'
import {UserContext} from'../App'

export class COmponentF extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
            user ={
                return<h1>User Context value is {user }</h1>
            }
        </UserContext.Consumer>
      </div>
    )
  }
}

export default COmponentF