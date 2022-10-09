import Head from 'next/head'
import Header from '../components/Header'
import Admin from '../components/Admin/Admin'
import Student from '../components//Student/Student'

export default function Home({ data }) {
  console.log(data)
  
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.role === 'admin'
        ?
          <Admin />
        :
        data.role === 'student'
        ?
          <Student />
        :
          <></>
        }
    </>
  )
}
