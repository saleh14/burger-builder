import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as PlusIcon } from './icons8-plus.svg'
import Layer from './Layers/Layer'
import AdderMenu from './AdderMenu'
const Burger = styled.div`
  background-color:#e5555f;
  color: white;
  font-size: 1.3em;
  display: flex;
  width: 100%;
  flex-direction: column;
  height:100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 666px;
  .header ,.content{
    background-color:#ee6666;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    /* padding: 10px 20px; */
  }
  .content{
    border-top: 3px solid #ee5656;
    color: black;
    flex: 1;
  }
  .contentWrapper{
    padding: 15px 22px;
  }

  .header{
    width: 100%;
    .wrapper{
      padding : 10px 20px;
      display: flex;
    }
    .title{
      width: 188px;
    }
    .plus{
      :hover{
        background-color: #ee5655;
      }
    }
  }
  
`

class BurgerBuilder extends Component {
  state = { show: false, layers: [] }

  showMenu = () => {
    this.setState(prev => ({
      show: !prev.show
    }))
  }
  addLayer = name => {
    const layers = [
      ...this.state.layers,
      { name, order: this.state.layers.length - 1 }
    ]
    const layersWithIDs = layers.map((layer, index) => ({
      ...layer,
      id: layer.name + index
    }))
    this.setState({ show: false, layers: layersWithIDs })
  }
  handleAction = (actionName, id) => {
    console.log('action:', actionName, id)
    const layers = [...this.state.layers]
    layers.forEach(layer => (layer.id === id ? layer.order-- : layer.order))
    layers.sort((a, b) => a.order - b.order)
    this.setState({ layers })
  }
  render () {
    return (
      <Burger>
        <div className='header'>
          <div className='wrapper'>
            <div className='title'>Build your Humburger now </div>
            <PlusIcon
              data-testid='plusIcon'
              className='plus'
              onClick={this.showMenu}
            />
            {this.state.show && <AdderMenu selectEvent={this.addLayer} />}

          </div>
        </div>
        <div className='content'>
          <div className='contentWrapper'>
            {this.state.layers.map((layer, index) => {
              return (
                <Layer
                  key={index}
                  type={layer.name}
                  id={layer.id}
                  actionEvent={this.handleAction}
                />
              )
            })}
          </div>
        </div>
      </Burger>
    )
  }
}

export default BurgerBuilder
