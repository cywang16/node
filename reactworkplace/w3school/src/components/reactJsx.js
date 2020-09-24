import React from 'react'

var title = <h2>React JSX</h2>

const myListElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)

const groupedH3 = (
  <div>
    <h3>I am a Header.</h3>
    <h3>I am a Header too.</h3>
  </div>
)

function GetMyListElement() {
    return (
        <div>{myListElement}</div>
    )
}

function GetGroupedH1() {
    return (
        <div>
            {groupedH3}
        </div>
    )
}

export default function ReactJsx() {
    return (
        <div>
        Does JSX have to have '.jsx' file extension?
        {title}
            <GetMyListElement />
            <GetGroupedH1 />
        </div>
    )
}