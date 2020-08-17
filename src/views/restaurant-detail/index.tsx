import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { breakpoint } from 'utils/theme'
import Tag from 'components/tag'
import { useParams, Redirect } from 'react-router-dom'
import RestaurantsContext from 'contexts/restaurants'
import { Routes } from 'utils/constants'
import getRestaurantBySlug from 'utils/get-restaurant-by-slug'

// netlify escape
type google = any

const Map = styled.div`
    max-width: 100%;

  ${breakpoint('xs')`
    height: ${props => props.theme.spacing(30)};
  `}

  ${breakpoint('sm')`
    height: ${props => props.theme.spacing(40)};
  `}

  ${breakpoint('lg')`
    height: ${props => props.theme.spacing(50)};
  `}
`

const About = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.green};
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.theme.spacing(0, 2)};

  ${breakpoint('xs')`
    height: ${props => props.theme.spacing(10)};
  `}

  ${breakpoint('sm')`
    height: ${props => props.theme.spacing(15)};
  `}

  ${breakpoint('lg')`
    height: ${props => props.theme.spacing(20)};
  `}
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px ${props => props.theme.spacing(2)};

  > * {
    color: ${props => props.theme.colors.dark};
    font-style: normal;
    text-decoration: none;
  }

  > *:not(:last-child) {
    padding-bottom: 26px;
  }

  ${breakpoint('xs')`
    font-size: ${props => props.theme.sizes.higher};
  `}

  ${breakpoint('sm')`
    font-size: ${props => props.theme.sizes.highest};
  `}
`

const RestaurantDetail: React.ComponentType = () => {
  const { slug } = useParams()

  const mapRef = useRef<HTMLDivElement>(null)

  const restaurants = useContext(RestaurantsContext)

  const restaurant = getRestaurantBySlug(restaurants, slug)

  useEffect(() => {
    if (mapRef.current && restaurant) {
      const {
        location: { lat, lng },
      } = restaurant

      const location: google.maps.LatLngLiteral = { lat, lng }

      const map = new google.maps.Map(mapRef.current, {
        center: location,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16,
      })

      new google.maps.Marker({ position: location, map })
    }
  }, [mapRef, restaurant])

  if (!restaurant) {
    return <Redirect to={Routes.RESTAURANTS} />
  }

  return (
    <section>
      <Map id="map" ref={mapRef} />
      <About>
        <div>
          <Tag restaurant={restaurant} />
        </div>
      </About>
      <Description>
        <address>{restaurant.location.address}</address>
        <a
          href={`tel:${restaurant.contact?.phone || '-'}`}
          itemProp="telephone"
          target="_blank"
          rel="noopener noreferrer"
        >
          {restaurant.contact?.phone || '-'}
        </a>
        <a
          href={`https://twitter.com/${restaurant.contact?.twitter || '-'}`}
          itemProp="website"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{restaurant.contact?.twitter || '-'}
        </a>
      </Description>
    </section>
  )
}

export default RestaurantDetail
