import React, { Component } from 'react'
import styled from 'styled-components'
import Cheese from './Cheese'
import Meat from './Meat'
import Salad from './Salad'
import Tomato from './Tomato'

const StyledLayer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: calc(100% - 100px);
  >div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: orange;
  }
  .meat{
    flex:1;
    background-color: brown;
  }
  .salad{
    flex:1;
    background-color: green;
  }
  .cheese{
    flex:1;
    background-color: yellow;
  }
  .tomato{
    flex:1;
    background-color: red;
  }
`

export default class Layer extends Component {
  state = { action: null }

  handleAction = e => {
    const { name, dataset } = e.target
    this.props.actionEvent(name, dataset.id)
  }

  render () {
    const { type, id } = this.props

    let AddedLayer = null
    if (type === 'Cheese') AddedLayer = () => <Cheese />
    else if (type === 'Meat') AddedLayer = () => <Meat />
    else if (type === 'Salad') AddedLayer = () => <Salad />
    else if (type === 'Tomato') AddedLayer = () => <Tomato />

    return (
      <StyledLayer>
        <div>
          <AddedLayer id={id} />
          <div className='btns'>
            <input
              onClick={this.handleAction}
              data-id={id}
              name='moveUp'
              type='button'
              value='moveUp'
            />
            <input
              onClick={this.handleAction}
              data-id={id}
              name='moveDown'
              type='button'
              value='moveDown'
            />
            <input
              onClick={this.handleAction}
              data-id={id}
              name='delete'
              type='button'
              value='delete'
            />
          </div>
        </div>
      </StyledLayer>
    )
  }
}
