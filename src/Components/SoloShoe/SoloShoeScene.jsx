import {OrbitControls, useGLTF } from '@react-three/drei'
import React from 'react'
import { angleToRadians } from '../LandingShoe/anglecalc'
export function SoloShoeScene(props) {
    const { nodes, materials } = useGLTF('/Models/Airmax/scene-transformed.glb')
    return (
      <>
        <OrbitControls/>
        <group {...props} dispose={null}>
          <mesh geometry={nodes.defaultMaterial.geometry} 
          material={materials['1001']}
          rotation={[-angleToRadians(90), 0, 0]}
          />
        </group>
      </>
    )
  }
  
  useGLTF.preload('/Models/Airmax/scene-transformed.glb')