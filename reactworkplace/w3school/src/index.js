import React from 'react'
import ReactDOM from 'react-dom'
import SimpleClock from './components/SimpleClock'
import App from './App'
import './index.css'

ReactDOM.render(
  <SimpleClock 
  width = '400' height = '400'
  style = {{backgroundColor: '#333'}} />,
  document.getElementById('SimpleClock')
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
