import React from 'react'
import SidePanel from './AdminSidePanel'
import MainContent from './AdminMainContent'
import Footer from '../Footer'
import { AdminContainer } from './Admin.style'

export default function Admin( { data } ) {
  return (
    <>
      <AdminContainer>
        <SidePanel></SidePanel>
        <MainContent data={data}></MainContent>
      </AdminContainer>
      <Footer />
    </>
  )
}
