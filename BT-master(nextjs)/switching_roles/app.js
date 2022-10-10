import React from 'react';

const dataToShare = {
  student: {
    id: 1,
    role: 'student',
    name: 'studentos',
  },
  admin: {
    id: 2,
    role: 'admin',
    name: 'adminos',
  },
};

function MyApp({ Component, pageProps }) {
  const [role, setRole] = React.useState(undefined);

  return (
    <Component
      {...pageProps}
      data={dataToShare[role]}
      role={role}
      setRole={setRole}
    />
  );
}

export default MyApp;
