import React, { Component } from 'react'
import styled from 'styled-components'
import BurgerBuilder from './BurgerBuilder'

function handleClick (e, data) {
  console.log(data.foo)
}

const StyledApp = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  header{
    display:block;
    margin: 0 auto;
    background-color: #f44444;
    max-width: 1200px;
    width: 100%;
    height: 166px;
    font-size: 2.3 em;
    h1{
      color: white;
      margin: 0 auto;
      display: block;
      width: 333px;
      padding-top:42px;
    }
  }
`

class App extends Component {
  state = { data: null }
  async componentDidMount () {
    const data = await fetch('/.netlify/functions/some-fn').then(d => d.json())
    console.log(data)
    this.setState({ data })
  }
  render () {
    return (
      <StyledApp>
        <header>
          <h1>Burger Builder</h1>
        </header>
        <BurgerBuilder />
      </StyledApp>
    )
  }
}

export default App
