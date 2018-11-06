import React, { Component } from 'react'
import styled from 'styled-components'
import Cheese from './Cheese'
import Meat from './Meat'
import Salad from './Salad'
import Tomato from './Tomato'

const StyledLayer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: calc(100% - 100px);
  div{
    width: 100%;
  }
  .meat{
    background-color: brown;
  }
  .salad{
    background-color: green;
  }
  .cheese{
    background-color: yellow;
  }
  .tomato{
    background-color: red;
  }
`

export default class Layer extends Component {
  render () {
    const { type } = this.props

    let AddedLayer = null
    if (type === 'Cheese') AddedLayer = () => <Cheese />
    if (type === 'Meat') AddedLayer = () => <Meat />
    if (type === 'Salad') AddedLayer = () => <Salad />
    if (type === 'Tomato') AddedLayer = () => <Tomato />

    return (
      <StyledLayer>
        <AddedLayer />
      </StyledLayer>
    )
  }
}
