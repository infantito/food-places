export enum Endpoint {
  RESTAURANTS = '/data/restaurants.json',
}

export enum Routes {
  HOME = '/',
  NO_MATCH = '/restaurants/:slug/*',
  RESTAURANTS = '/restaurants',
  RESTAURANT = '/restaurants/:slug',
}
