import React from 'react'

var title = <h2>Component Render HTML</h2>

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

class RenderSimple extends React.Component {
  render() {
    return <p>Find control and render.</p>
  }
}

class RenderMyElement extends React.Component {
  render() {
    return <div>{myElement}</div>
  }
}

class RenderHtml extends React.Component {
  render() {
    return (
      <div>
        {title}
        <RenderSimple />
        <RenderMyElement />
        {myElement}
      </div>
    )
  }
}

export default RenderHtml