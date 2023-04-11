import Head from 'next/head'
import React from 'react';
import { useRouter } from 'next/router'

const loginData = [
  {
    username: 'admin',
    password: 'admin',
    role: 'admin'
  },
  {
    username: 'student',
    password: 'student',
    role: 'student'
  },
]

export default function Home({ role, setRole }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const login = () => {
    let newRole = undefined;

    loginData.map(account => {
      if (account.username === username && account.password === password) return newRole = account.role;
    })

    setRole(newRole)
  }

  return (
    <>
      <Head>
        <title>Next - Page 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {role ? (
          <>
            Logged in
            <button onClick={() => setRole(undefined)}>Logout</button>
          </>
        ) :
        (
          <>
            <input placeholder='username' value={username} onChange={({ target }) => setUsername(target.value)} />
            <input placeholder='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            <button onClick={login}>Login</button>
          </>
        )}
        <button onClick={() => router.push('/dashboard')}>Dashboard</button>
      </>
    </>
  )
}
