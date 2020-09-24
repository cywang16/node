import React from 'react'

const myListElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
)

const groupedH1 = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
)

function GetMyListElement() {
    return (
        <div>{myListElement}</div>
    )
}

function getGroupedH1() {
    return {groupedH1}
}

export default function ReactJsx() {
    return (
        <div>
            <GetMyListElement />
            <getGroupedH1 />
        </div>
    )
}