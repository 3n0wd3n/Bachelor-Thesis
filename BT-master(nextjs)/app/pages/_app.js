import React from 'react';
import { setCookie } from 'cookies-next';
import { GlobalStyle } from '../styles/global.style'

// basic component of react and nextjs
function MyApp({ Component, pageProps }) {
  const [data, setData] = React.useState();
  // add notification
  return (
    <>
      <GlobalStyle />
      {/* we can change the role by input student or admin to data[]*/}
      <Component {...pageProps} data={data} setData={setData} />
    </>
  )
}

export default MyApp
