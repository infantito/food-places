import React, { Fragment } from 'react'
import styled from 'styled-components'
import { breakpoint } from 'utils/theme'

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

const Tag: React.ComponentType<Tag.Props> = props => {
  const { restaurant } = props

  return (
    <Fragment>
      <Title>{restaurant.name}</Title>
      <CategoryName>{restaurant.category}</CategoryName>
    </Fragment>
  )
}

export default Tag
