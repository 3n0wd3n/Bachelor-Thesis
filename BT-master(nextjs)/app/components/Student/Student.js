import React from 'react'
import InfoPanel from './StudentInfoPanel'

import { FontsHeaderBold } from '../CommonStyles'

export default function Student({ data }) {
  console.log(data)
  return (
    <>
      <InfoPanel data={data} />
    </>
  )
}
