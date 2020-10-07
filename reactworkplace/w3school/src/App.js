import React, { Component } from 'react'

import TableHeader from './components/tableHeader'
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
        <table>
          <tbody>
            <TableHeader />
            <HelloWorld />
            <Es6 />
            <RenderHtml />
            <ReactJsx />
            <Garage brand = 'Toyota' />
            <tr>
              <td><ColorPropCar color = 'green colored prop' /></td>
              <Car />
            </tr>
            <SassHello />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
