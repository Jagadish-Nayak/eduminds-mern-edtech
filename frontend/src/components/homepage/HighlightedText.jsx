import React from 'react'

const HighlightedText = ({text}) => {
  return (
    <span className='bg-gradient-to-b from-blue-600 to-green-400 inline-block text-transparent bg-clip-text'>{text}</span>
  )
}

export default HighlightedText