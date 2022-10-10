import React from 'react'

import { FontsHeaderBold } from '../CommonStyles'

export default function InfoPanel({ data }) {
  console.log(data)
  return (
    <>
      <FontsHeaderBold>{data.firstName}</FontsHeaderBold>
      <FontsHeaderBold>{data.lastName}</FontsHeaderBold>
    </>
  )
}