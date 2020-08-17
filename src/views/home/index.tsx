import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RestaurantCard from 'components/restaurant-card'
import fetchRestaurants from 'utils/fetch-restaurants'

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`

const Home: React.ComponentType = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)

  useEffect(() => {
    fetchRestaurants().then(setRestaurants)
  }, [])

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
