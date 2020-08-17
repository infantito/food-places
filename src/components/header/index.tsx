import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { Routes } from 'utils/constants'
import { breakpoint } from 'utils/theme'
import back from 'assets/ic_webBack.png'
import map from 'assets/icon_map.png'

const Container = styled.header`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.highlight};
  display: flex;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 1;

  ${breakpoint('xs')`
    height: ${props => props.theme.spacing(10)};
  `}

  ${breakpoint('sm')`
    height: ${props => props.theme.spacing(12.5)};
  `}

  ${breakpoint('lg')`
    height: ${props => props.theme.spacing(15)};
  `}
`

const Content = styled.div<{ slug?: string }>`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  padding: ${props => props.theme.spacing(1, 1, 2)};
  width: 100%;

  a {
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    text-decoration: none;

    ${breakpoint('xs')`
      font-size: ${props => props.theme.sizes.header}px;
    `}

    ${breakpoint('lg')`
      font-size: ${props => props.theme.spacing(4)};
    `}

    :not(:only-child) {
      padding: ${props => props.theme.spacing(1, 2)};

      ${props =>
        props.slug
          ? `
          :first-of-type {
            bottom: 0;
            left: 0;
            position: absolute;

            img {
              width: ${props.theme.spacing(2)};
            }
          }
        `
          : ''}

      :last-of-type {
        bottom: 0;
        position: absolute;
        right: 0;

        img {
          width: ${props => props.theme.spacing(4)};
        }
      }
    }
  }
`

const Header: React.ComponentType = () => {
  const match = useRouteMatch<{ slug: string }>('/restaurants/:slug')

  return (
    <Container>
      <Content slug={match?.params?.slug}>
        {match?.params?.slug && (
          <Link to={Routes.RESTAURANTS}>
            <img src={back} alt="🔙" />
          </Link>
        )}
        <Link to={Routes.RESTAURANTS}>Lunch Tyme</Link>
        <Link to={Routes.INTERNETS}>
          <img src={map} alt="🗺️" />
        </Link>
      </Content>
    </Container>
  )
}

export default Header
