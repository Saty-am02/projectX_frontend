import React from 'react'
import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-4 border-b-4 border-secondary-400 rounded-full animate-spin'></div>
    </div>
    </Html>
  )
}

export default Loader
