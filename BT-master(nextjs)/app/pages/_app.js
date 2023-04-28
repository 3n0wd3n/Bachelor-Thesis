import React from 'react';
import { GlobalStyle } from '../styles/global.style'
import Notification from '../components/Notification'
import Assurance from '../components/Assurance'

// basic component of react and nextjs
function MyApp({ Component, pageProps }) {
  const [data, setData] = React.useState();
  const [notification, setNotification] = React.useState("")
  const [warning, setWarning] = React.useState("")

  return (
    <>
      <GlobalStyle />
      <Notification notification={notification} setNotification={setNotification} />
      <Assurance warning={warning} />
      <Component {...pageProps} data={data} setData={setData} setWarning={setWarning} setNotification={setNotification} />
    </>
  )
}

export default MyApp
