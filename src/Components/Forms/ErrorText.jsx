import React from 'react'

function ErrorText({error}) {
  return (
    <div className='text-red-600 text-xs m-0 p-0'>{error}</div>
  )
}

export default ErrorText