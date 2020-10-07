import React from 'react'

class Car extends React.Component {
  constructor() {
    super()
    this.state = {color: 'red'}
  }
  render() {
    return <td class = 'BorderedCell'>Hi, I am a {this.state.color} Car!</td>
  }
}

class BrandPropCar extends React.Component {
  render() {
    return <h3>This is a brand {this.props.brand} car.</h3>
  }
}

export class ColorPropCar extends React.Component {
  render() {
    return <h2>Hi, I am a {this.props.color} Car!</h2>
  }
}

export class Garage extends React.Component {
  render() {
    return (
      <tr>
        <Car />
        <td>
          <h3>Who lives in garage?</h3>
          <BrandPropCar brand = {this.props.brand} />
        </td>
      </tr>
    )
  }
}

export default Car