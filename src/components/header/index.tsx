import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Routes } from 'utils/constants'
import { breakpoint } from 'utils/theme'

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
  font-weight: bold;
  height: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(1, 1, 2)};
  justify-content: center;
  width: 100%;

  a {
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    text-decoration: none;

    ${breakpoint('xs')`
      font-size: ${props => props.theme.sizes.header}
    `}

    ${breakpoint('lg')`
      font-size: ${props => props.theme.sizes.highest}
    `}
  }
`

const Header: React.ComponentType = () => {
  return (
    <Container>
      <Content>
        <Link to={Routes.RESTAURANTS}>Lunch Tyme</Link>
      </Content>
    </Container>
  )
}

export default Header
