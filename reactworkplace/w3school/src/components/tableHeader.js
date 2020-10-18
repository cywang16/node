import React from 'react'
import './tableHeader.scss'

class TableHeader extends React.Component {
  render() {
    var exerName = 'Exercise Name'
    var exerOutput = 'Exercise Output'
    return (
      <tr class = 'TableHeader'>
        <th>{exerName}</th>
        <th class = 'Output'>{exerOutput}</th>
      </tr>
    )
  }
}

export default TableHeader