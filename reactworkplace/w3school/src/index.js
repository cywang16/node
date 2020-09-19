import React from 'react';
import ReactDOM from 'react-dom';

const myFirstElement = <h1>Hello React!</h1>

ReactDOM.render(
  myFirstElement,
  document.getElementById('root')
);

// ES 6
class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = () => {
    document.getElementById("demo").innerHTML += JSON.stringify(this);
  }
}

var myheader = new Header();

// The window object calls the function:
window.addEventListener("load", myheader.changeColor);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

// React Render HTML
ReactDOM.render(<p>Find control and render.</p>, document.getElementById('reactRenderHtml'))

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
)

ReactDOM.render(myElement, document.getElementById('myElements'))