import React, { Component } from 'react';

class App extends Component {
  const myFirstElement = <h1>Hello World!</h1>
  const helloReact = <h2>Hello React</h2>

  render() {
    return (
      <div className="App">
      {myFirstElement}
        {helloReact}
      </div>
    )
  }
}

/*
function App() {

  return (
    <div className="App">
    {myFirstElement}
      {helloReact}
    </div>
  );
}
*/

export default App
