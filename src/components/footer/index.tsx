import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Routes } from 'utils/constants'
import lunch from 'assets/tab_lunch.png'
import internets from 'assets/tab_internets.png'

const Container = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.colors.dark};
  bottom: 0;
  display: flex;
  height: calc(${props => props.theme.spacing(8)} + 2px);
  justify-content: space-around;
  left: 0;
  padding: ${props => props.theme.spacing(1)};
  position: fixed;
  width: 100%;

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    :hover {
      opacity: 0.75;
    }
  }

  span {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.sizes.small}px;
    text-decoration: none;
  }

  img {
    width: ${props => props.theme.spacing(3.5)};
  }
`

const Footer: React.ComponentType = () => {
  return (
    <Container>
      <Link to={Routes.RESTAURANTS}>
        <img src={lunch} alt="🍔" />
        <span>Lunch</span>
      </Link>
      <Link to={Routes.INTERNETS}>
        <img src={internets} alt="💻" />
        <span>internets</span>
      </Link>
    </Container>
  )
}

export default Footer
