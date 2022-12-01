import Head from 'next/head'
import Admin from '../components/Admin/Admin'
import Student from '../components/Student/Student'
export default function Home({ data }) {
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
