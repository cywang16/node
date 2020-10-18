import React from 'react'

class Header {
  constructor() {
    this.color = 'Red'
    this.date = new Date()
  }

  checkTime = () => {
    // this.date = new Date()
    // document.getElementById('es6Demo').innerHTML = this.date.toJSON()
    document.getElementById('es6Demo').innerHTML = 'checkTime gets ' + Date()
  }
}

var myEs6header = new Header()
// The window object calls the function:
// window.addEventListener("load", myEs6header.changeColor)

class Es6 extends React.Component {
  render() {
    // A button object calls the function:
    return (
      <tr>
        <td>
          <h2>ES6 in Component</h2>
        </td>
        <td class = 'BorderedCell'>
          <p>The <strong>this</strong> keyword represents the Header object.</p>
          <button id = 'es6Btn' onClick = {myEs6header.checkTime}>Click Me!</button>
          <p><strong>this</strong> was created at {myEs6header.date}</p><div id = 'es6Demo'></div>
        </td>
      </tr>
    )
  }
}

export default Es6
