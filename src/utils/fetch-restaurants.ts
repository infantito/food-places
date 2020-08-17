import { Endpoint } from './constants'

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  let restaurants: Restaurant[] = []

  try {
    const response = await fetch(Endpoint.RESTAURANTS, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })

    const data = await response.json()

    restaurants = data.restaurants as Restaurant[]
  } catch {
  } finally {
    return restaurants
  }
}

export default fetchRestaurants
