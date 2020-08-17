import React from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import Home from 'views/home'
import Template from './template'

const Container = styled.article`
  height: 100%;
  width: 100%;

  section {
    padding: ${props => props.theme.spacing(10, 0, 0)};
  }
`

const App: React.ComponentType = props => {
  return (
    <Template>
      <Container>
        <Header />
        <Home />
      </Container>
    </Template>
  )
}

export default App
