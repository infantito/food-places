import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const Content = styled.div`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: ${props => props.theme.sizes.header}px;
  height: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(1, 1, 2)};
  justify-content: center;
  width: 100%;

  h2 {
    margin: 0 auto;
  }
`

const Header: React.ComponentType = () => {
  return (
    <Container>
      <Content>
        <h2>Lunch Tyme</h2>
      </Content>
    </Container>
  )
}

export default Header
