import React, { Component } from 'react'

import HelloWorld from './components/helloWorld'
import Es6 from './components/es6'
import RenderHtml, {renderSimple, renderMyElement} from './components/renderHtml'

class App extends Component {

  render() {
    const myFirstElement = <h1>Hello World!</h1>
    return (
      <div>
      {myFirstElement}
      <HelloWorld />
      <Es6 />
      <RenderHtml />
      <renderSimple />
      <renderMyElement />
      </div>
    )
  }
}

export default App
