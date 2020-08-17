import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Routes } from 'utils/constants'
import Header from 'components/header'
import Footer from 'components/footer'
import RestaurantsContext from 'contexts/restaurants'
import Home from 'views/home'
import RestaurantDetail from 'views/restaurant-detail'
import Clusters from 'views/clusters'
import NotFound from 'views/not-found'
import fetchRestaurants from 'utils/fetch-restaurants'

const Router: React.ComponentType = props => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)

  useEffect(() => {
    fetchRestaurants().then(setRestaurants)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <RestaurantsContext.Provider value={restaurants}>
        <Switch>
          <Route path={Routes.HOME} exact={true}>
            <Redirect to={Routes.RESTAURANTS} />
          </Route>
          <Route path={Routes.RESTAURANTS} exact={true}>
            <Home />
          </Route>
          <Route path={Routes.RESTAURANT} exact={true}>
            <RestaurantDetail />
          </Route>
          <Route path={Routes.INTERNETS} exact={true}>
            <Clusters />
          </Route>
          <Route path={Routes.NO_MATCH}>
            <NotFound />
          </Route>
        </Switch>
      </RestaurantsContext.Provider>
      {props.children}
      <Footer />
    </BrowserRouter>
  )
}

export default Router
