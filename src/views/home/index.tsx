import React, { useContext } from 'react'
import styled from 'styled-components'
import RestaurantCard from 'components/restaurant-card'
import RestaurantsContext from 'contexts/restaurants'

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`

const Home: React.ComponentType = () => {
  const restaurants = useContext(RestaurantsContext)

  if (!restaurants) {
    return <p>loading...</p>
  }

  return (
    <Container>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </Container>
  )
}

export default Home
