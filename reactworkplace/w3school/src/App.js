import React, { Component } from 'react'

import HelloWorld from './components/helloWorld'
import Es6 from './components/es6'
import RenderHtml from './components/renderHtml'
import ReactJsx from './components/reactJsx'
import Car, {ColorPropCar, Garage} from './components/car'
import SassHello from './components/SassHello'

class App extends Component {

  render() {
    const myFirstElement = <h1>Hello World!</h1>
    return (
      <div>
        {myFirstElement}
        <HelloWorld />
        <Es6 />
        <RenderHtml />
        <ReactJsx />
        <Car />
        <ColorPropCar color = 'green colored prop' />
        <Garage brand = 'Toyota' />
        <SassHello />
      </div>
    )
  }
}

export default App
