import React from 'react'

export default function PostPage({setPostPage}) {
  return (
    <>
      PostPage      
      <button onClick={() => setPostPage(false)}>no</button>
    </>
  )
}
