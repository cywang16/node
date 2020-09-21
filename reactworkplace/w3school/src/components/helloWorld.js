import React from 'react'

class HelloWorld extends React.Component {
  render() {
    const myFirstElement = <h1>Hello World!</h1>
    const helloReact = <h2>Hello React</h2>
    return (
      <div>
        {myFirstElement}
        {helloReact}
      </div>
    )
  }
}

export default HelloWorld