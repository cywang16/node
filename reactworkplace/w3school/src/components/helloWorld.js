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

export default HelloWorld