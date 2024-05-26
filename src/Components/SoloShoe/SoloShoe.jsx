import { Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { SoloShoeScene } from './SoloShoeScene'



const SoloShoe = () => {

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

             <SoloShoeScene scale={1.5}/>

            <ambientLight args={["white" , 3]}/>

            <Environment background>
                <mesh scale={100}>
                    <sphereGeometry args={[1, 64,64]}/>
                    <meshBasicMaterial side={THREE.BackSide} color='#f2f2f2'/>
                </mesh>
            </Environment>
        </>
  )
}

export default SoloShoe