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

export class renderSimple extends React.Component {
  render() {
    return <p>Find control and render.</p>
  }
}

export class renderMyElement extends React.Component {
  render() {
    return {myElement}
  }
}

class RenderHtml extends React.Component {
  render() {
    return (
      <div>
        {title}
        <renderSimple />
        <renderMyElement />
        {myElement}
      </div>
    )
  }
}

export default RenderHtml