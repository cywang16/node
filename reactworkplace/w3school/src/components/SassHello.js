import React from 'react'
import './SassHello.scss'

var title = <h2 className = 'SassHello'>Hello Style!</h2>
var paragraph = <p className = 'SassHello'>Add a little style!</p>

export default function SassHello() {
  return (
    <div>
      {title}
      {paragraph}
    </div>
  )
}