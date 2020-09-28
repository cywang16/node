import React from 'react'

var title = <h2>Component Render HTML</h2>

const myElement = (
  <table>
<tbody>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
</tbody>
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
      </div>
    )
  }
}

export default RenderHtml
