import React from 'react'

interface props {
    children: React.ReactNode 
}

const LetterBox = ({ children }: props ) => {
  return (
    <div className='bg-slate-500 aspect-square w-14 flex justify-center place-items-center text-4xl'>
        { children }
        </div>
  )
}

export default LetterBox