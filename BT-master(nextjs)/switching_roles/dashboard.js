import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Dashboard({ data }) {
  const router = useRouter();

  if (!data) return (
    <>
      <Head>
        <title>Dashboard - Unauthorized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Not logged in
      <button onClick={() => router.push('/')}>Login</button>
    </>
  )

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{`Role:${data.role}`}</span>
        <span>{`Name:${data.name}`}</span>
      </div>
      <button onClick={() => router.push('/')}>Home</button>
    </>
  )
}
