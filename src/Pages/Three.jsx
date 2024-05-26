import React from 'react'
import LandingShoe from '../Components/LandingShoe/LandingShoe'
import { Canvas } from '@react-three/fiber'

const Three = () => {
  return (
    <div className='threed_container' style={{width: '100%', height:'100hv'}}>
    <Canvas id='landing_shoe_threed' shadows>
        <LandingShoe/>
    </Canvas>
    </div>
  )
}

export default Three