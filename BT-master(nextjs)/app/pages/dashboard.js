import Head from 'next/head'
import React from 'react';
import Admin from '../components/Admin/Admin'
import Student from '../components/Student/Student'

export { getServerSideProps } from '../components/getDataFromCookies'

export default function Home({ data, userData }) {
  React.useEffect(() => {
    if (userData) setData(userData)
  }, [userData])

  if (!data) return <>Not authorized</>

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
