import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from 'utils/constants'

const NotFound: React.ComponentType = () => {
  let location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link to={Routes.HOME}>Back</Link>
    </div>
  )
}

export default NotFound
