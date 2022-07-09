import React from 'react'

function Button({title, styles}) {
  return (
    <button className={`p-2 rounded-lg ${styles}`}>{title}</button>
  )
}

export {Button}