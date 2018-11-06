import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items:stretch;
  div{
    box-sizing: border-box;
    width:240px;
    padding: .5em 1em;
    line-height: 2em;
    :hover{
      background-color: #f33555;
    }
    a{
      text-decoration: none;
    }
  }
`

export default class AdderMenu extends Component {
  handleSelect = e => {
    const { name } = e.target
    const { selectEvent, addedLayers } = this.props
    if (typeof selectEvent === 'function') {
      selectEvent(name)
    }
  }
  render () {
    return (
      <StyledMenu>
        <div>
          {' '}<a name='Cheese' href='#' onClick={this.handleSelect}>cheese</a>
        </div>
        <div> <a name='Meat' href='#' onClick={this.handleSelect}>meat</a></div>
        <div>
          {' '}<a name='Tomato' href='#' onClick={this.handleSelect}>tomato </a>
        </div>
        <div>
          {' '}<a name='Salad' href='#' onClick={this.handleSelect}>salad</a>
        </div>
      </StyledMenu>
    )
  }
}
