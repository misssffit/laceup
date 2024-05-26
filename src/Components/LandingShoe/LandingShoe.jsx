import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import './LandingShoe.css'
import { angleToRadians } from './anglecalc'
import * as THREE from 'three'
import gsap from 'gsap'
import { Airmax } from './Scene'



const LandingShoe = () => {

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

             <Airmax scale={2}/>

            <ambientLight args={["white" , 1]}/>

            <Environment background>
                <mesh scale={100}>
                    <sphereGeometry args={[1, 64,64]}/>
                    <meshBasicMaterial side={THREE.BackSide} color='#edd2ff'/>
                </mesh>
            </Environment>
        </>
  )
}

export default LandingShoe