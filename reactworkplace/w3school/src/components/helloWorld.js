import React from 'react'

class HelloWorld extends React.Component {
  render() {
    var helloReact = <h2>Hello React</h2>
    var helloReactOutput = <h2>Hello React Output</h2>
    return (
      <tr>
        <td class = 'BorderedCell'>{helloReact}</td>
        <td>{helloReactOutput}</td>
      </tr>
    )
  }
}

export default HelloWorld