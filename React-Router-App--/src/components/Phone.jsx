import React from 'react'
import { useParams } from 'react-router'

function Phone() {

    const {id} = useParams()
  return (
    <div>Phone : {id}</div>
  )
}

export default Phone