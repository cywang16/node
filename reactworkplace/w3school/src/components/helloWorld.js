import React from 'react'

class HelloWorld extends React.Component {
  render() {
    const helloReact = <h2>Hello React</h2>
    return (
      <div>
        {helloReact}
      </div>
    )
  }
}

export class HelloWorldRow extends React.Component {
  render() {
    const helloReact = <h2>Hello React</h2>
    return (
      <tr>
        <td>{helloReact}</td>
        <td>{helloReact}</td>
      </tr>
    )
  }
}

export default HelloWorld