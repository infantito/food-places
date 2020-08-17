import React from 'react'
import styled from 'styled-components'
import Router from './router'
import Template from './template'

const Container = styled.article`
  height: 100%;
  width: 100%;
`

const App: React.ComponentType = () => {
  return (
    <Template>
      <Container>
        <Router />
      </Container>
    </Template>
  )
}

export default App
