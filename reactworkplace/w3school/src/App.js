import React, { Component } from 'react';

function App() {
  const myFirstElement = <h1>Hello World!</h1>
  const helloReact = <h2>Hello React</h2>

  return (
    <div className="App">
    {myFirstElement}
      {helloReact}
    </div>
  );
}

export default App;
