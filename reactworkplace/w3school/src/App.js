import React, { Component } from 'react'

import HelloWorld from './components/helloWorld'
import Es6 from './components/es6'
// import RenderHtml, {renderSimple, renderMyElement} from './components/renderHtml'
import RenderHtml from './components/renderHtml'
import ReactJsx from './components/reactJsx'
import Car from './components/car'

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
      </div>
    )
  }
}

export default App
