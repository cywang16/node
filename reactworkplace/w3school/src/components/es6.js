import React from 'react'

class Header {
  constructor() {
    this.color = 'Red'
    this.date = Date()
  }

  changeColor = () => {
    document.getElementById('es6Demo').innerHTML += JSON.stringify(this);
  }
}

var myEs6header = new Header()
// The window object calls the function:
// window.addEventListener("load", myEs6header.changeColor)

class Es6 extends React.Component {

  render() {
    // A button object calls the function:
    return (
      <div>
      <h2>ES6 in Component</h2>
      <p>The <strong>this</strong> keyword represents the Header object.</p>
      <button id = 'es6Btn' onClick = {myEs6header.changeColor}>Click Me!</button>
      <p><strong>this</strong> represents:<div id = 'es6Demo'></div></p>
      </div>
    )
  }
}

export default Es6