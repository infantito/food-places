import React from 'react'
import styled from 'styled-components'
import { breakpoint } from 'utils/theme'

const Container = styled.div<{ image: string }>`
  background-color: ${props => props.theme.colors.gray};
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px -85px 50px -40px rgba(0,0,0,0.8);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  ${breakpoint('xs')`
    height: ${props => props.theme.spacing(30)};
    max-width: 100%;
    padding: ${props => props.theme.spacing(1, 2)};
  `}

  ${breakpoint('sm')`
    height: ${props => props.theme.spacing(40)};
    max-width: 50%;
    padding: ${props => props.theme.spacing(2)};
  `}

  ${breakpoint('lg')`
    height: ${props => props.theme.spacing(50)};

    :hover {
      box-shadow: inset 0px -125px 80px -40px rgba(0,0,0,0.8);
    }
  `}
`

const Title = styled.h2`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin: ${props => props.theme.spacing(0, 0, 1)};
  width: 100%;

  ${breakpoint('xs')`
    font-size: ${props => props.theme.sizes.standard}px;
  `}

  ${breakpoint('lg')`
    font-size: ${props => props.theme.sizes.higher}px;
  `}
`

const CategoryName = styled.h3`
  color: ${props => props.theme.colors.white};
  margin: 0;
  width: 100%;

  ${breakpoint('xs')`
    font-size: ${props => props.theme.sizes.medium}px;
  `}

  ${breakpoint('lg')`
    font-size: ${props => props.theme.sizes.standard}px;
  `}
`

const RestaurantCard: React.ComponentType<RestaurantCard.Props> = props => {
  const { restaurant } = props

  return (
    <Container image={restaurant.backgroundImageURL}>
      <Title>{restaurant.name}</Title>
      <CategoryName>{restaurant.category}</CategoryName>
    </Container>
  )
}

export default RestaurantCard
