import formatSlug from './format-slug'

const getRestaurantBySlug = (
  restaurants: Restaurant[] | null | undefined,
  slug: string,
): Restaurant | null | undefined => {
  const data = Array.isArray(restaurants)
    ? restaurants.find(item => formatSlug(item.name) === slug)
    : null

  return data
}

export default getRestaurantBySlug
