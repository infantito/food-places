import React, { useMemo } from 'react'
import styled from 'styled-components'
import { breakpoint } from 'utils/theme'
import { Link } from 'react-router-dom'
import { Routes } from 'utils/constants'
import Tag from 'components/tag'
import formatSlug from 'utils/format-slug'

const Container = styled(Link)<{ image: string }>`
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

const RestaurantCard: React.ComponentType<RestaurantCard.Props> = props => {
  const { restaurant } = props

  const slug = useMemo(() => formatSlug(restaurant.name), [restaurant.name])

  const url = `${Routes.RESTAURANTS}/${slug}`

  return (
    <Container image={restaurant.backgroundImageURL} to={url}>
      <Tag restaurant={restaurant} />
    </Container>
  )
}

export default RestaurantCard
