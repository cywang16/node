import React, { Component } from 'react';

class App extends Component {

  render() {
    const myFirstElement = <h1>Hello World!</h1>
    const helloReact = <h2>Hello React</h2>
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
