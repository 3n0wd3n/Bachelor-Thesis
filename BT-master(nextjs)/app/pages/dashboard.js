import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import Admin from '../components/Admin/Admin';
import Student from '../components/Student/Student';

export { getServerSideProps } from '../components/getDataFromCookies'

export default function Home({ data, setData, userData }) {
  React.useEffect(() => {
    if (userData) setData(userData)
  }, [userData])

  if (!data) {
    return <>
    Fuck you! Login again :*
    <button onClick={() => Router.push('/')}>back to login</button>
    </>
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.role === 'admin'
        ?
          <Admin data={data} />
        :
        data.role === 'student'
        ?
          <Student data={data} />
        :
          <></>
      }
    </>
  )
}
