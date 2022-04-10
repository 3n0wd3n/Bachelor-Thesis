export const Logged = ({ data }) => {
  console.log(data)
  return (
    <>
      <h1>{data._id}</h1>
      <h1>{data.role}</h1>
      <h1>{data.name}</h1>
      <h1>{data.surname}</h1>
      <h1>{data.username}</h1>
      <h1>{data.password}</h1>
    </>
  )
}