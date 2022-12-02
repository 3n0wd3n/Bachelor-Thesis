import Head from 'next/head'
import React from 'react';
import { Container } from '../components/CommonStyles'
import LoginForm from '../components/Login/Login'
import Footer from '../components/Footer'

export { getServerSideProps } from '../components/getDataFromCookies'

export default function Home({ setData, userData }) {
  React.useEffect(() => {
    if (userData) setData(userData)
  }, [userData])

  return (
    <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <LoginForm setData={setData} />
        </Container>
        <Footer />
    </>
  )
}
