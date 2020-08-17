import React, { useContext, useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {} from 'google-maps'
import RestaurantsContext from 'contexts/restaurants'
import { breakpoint } from 'utils/theme'
import formatSlug from 'utils/format-slug'
import { Routes } from 'utils/constants'

const Container = styled.section`
  > div {
    ${breakpoint('xs')`
        height: calc(100% - 50px);
        padding: ${props => props.theme.spacing(10, 0, 0)};
      `}

      ${breakpoint('sm')`
        height: 100%;
        padding: ${props => props.theme.spacing(12.5, 0, 0)};
      `}

      ${breakpoint('lg')`
        padding: ${props => props.theme.spacing(15, 0, 0)};
      `}
  }
`

const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const Clusters: React.ComponentType = () => {
  const restaurants = useContext(RestaurantsContext)

  const mapRef = useRef<HTMLDivElement>(null)

  const handleMarker = (slug: string) => () => {
    const url = `${Routes.RESTAURANTS}/${slug}`

    return <Redirect to={url} />
  }

  const formatMarker = (
    { location, name }: Restaurant,
    index: number,
  ): google.maps.Marker => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      label: labels[index % labels.length],
    })

    marker.addListener('click', handleMarker(formatSlug(name)))

    return marker
  }

  useEffect(() => {
    if (Array.isArray(restaurants) && mapRef.current) {
      const [restaurant] = restaurants

      const markers = restaurants.map(formatMarker)

      const map = new google.maps.Map(mapRef.current, {
        center: {
          lat: restaurant.location.lat,
          lng: restaurant.location.lng,
        },
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 4,
      })

      new MarkerClusterer(map, markers, {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef.current])

  if (!restaurants) {
    return <p>loading...</p>
  }

  return <Container id="map" ref={mapRef} />
}

export default Clusters
