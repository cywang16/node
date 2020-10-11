import React from 'react'
import ReactDOM from 'react-dom'
import SimpleClock from './components/SimpleClock'
import App from './App'
import './index.css'

ReactDOM.render(
  <SimpleClock />,
  document.getElementById('SimpleClock')
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
