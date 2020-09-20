import React, { Component } from 'react';

function App() {
  const myFirstElement = <h1>Hello World!</h1>
  const helloReact = <h2>Hello React</h2>

  return (
    {myFirstElement}
    <div className="App">
      {helloReact}
    </div>
  );
}

export default App;
