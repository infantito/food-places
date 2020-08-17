enum Category {
  BURGERS = 'Burgers',
  SEAFOOD = 'Seafood',
  TAP_HOUSE = 'Tap House',
  WING_JOINT = 'Wing Joint',
  JAPANESE = 'Japanese',
  MEXICAN = 'Mexican',
  BAR_AND_GRILL = 'Bar and Grill',
  TEX_MEX = 'Tex Mex',
  PREPARED_EATS = 'Prepared Eats',
  PUB = 'Pub',
  COFFEE_AND_BREAKFAST = 'Coffee and Breakfast',
  THAI = 'Thai',
  FAST_FOOD_BURGERS = 'Fast Food Burgers',
}

enum Country {
  USA = 'United States',
}

enum City {
  DALLAS = 'Dallas',
  ADDISON = 'Addison',
}

enum State {
  TEXAS = 'TX',
}

interface Contact {
  phone: string
  formattedPhone: string
  twitter: string
}

interface Location {
  address: string
  crossStreet: string
  lat: number
  lng: number
  postalCode: string
  cc: string
  city: City
  state: State
  country: Country
  formattedAddress: string[]
}

interface Restaurant {
  name: string
  backgroundImageURL: string
  category: Category
  contact: Contact
  location: Location
}
