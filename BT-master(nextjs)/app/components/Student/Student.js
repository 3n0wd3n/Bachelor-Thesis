import React from 'react'
import InfoPanel from './StudentInfoPanel'


export default function Student({ data }) {
  console.log(data)
  return (
    <>
      <InfoPanel data={data} />
    </>
  )
}
