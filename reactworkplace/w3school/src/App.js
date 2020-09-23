import React, { Component } from 'react'

import HelloWorld from './components/helloWorld'
import Es6 from './components/es6'

class App extends Component {

  render() {
    const myFirstElement = <h1>Hello World!</h1>
    return (
      <div>
      {myFirstElement}
      <HelloWorld />
      <Es6 />
      </div>
    )
  }
}

export default App
