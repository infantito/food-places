export enum Endpoint {
  RESTAURANTS = '/data/restaurants.json',
}

export enum Routes {
  HOME = '/',
  INTERNETS = '/internets',
  NO_MATCH = '/restaurants/:slug/*',
  RESTAURANTS = '/restaurants',
  RESTAURANT = '/restaurants/:slug',
}
