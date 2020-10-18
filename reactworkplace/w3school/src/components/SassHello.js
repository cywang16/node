import React from 'react'
import './SassHello.scss'

var title = <h2>Hello Style!</h2>
var paragraph = <p>Add a little style!</p>

export default function SassHello() {
  return (
    <tr class = 'SassHello'>
      <td class = 'UnderlinedCell'>{title}</td>
      <td class = 'UnderlinedCell'>{paragraph}</td>
    </tr>
  )
}