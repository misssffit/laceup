import React from 'react'
import './Horizontal.css'
import { Canvas } from '@react-three/fiber'
import SoloShoe from '../SoloShoe/SoloShoe'



function ProductInfoHorizontal() {
    return (
    <div className="horizontal_container" style={{width: '606px',height:'584px'}} >
        <Canvas id='solo_shoe_threed' shadows>
            <SoloShoe/>
        </Canvas>
    </div>
  )
}

export default ProductInfoHorizontal