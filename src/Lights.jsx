import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Lights()
{

    const directionalLightRef = useRef()

    useFrame((state) => {
        directionalLightRef.current.position.z = state.camera.position.z + 1 - 4
        directionalLightRef.current.target.position.z = state.camera.position.z - 4
        directionalLightRef.current.target.updateMatrixWorld()

    })

    return <>
        <directionalLight
          ref={ directionalLightRef }
          castShadow
          intensity={0.7}
          color={'#FFFFED'}
          shadow-bias={-0.0004}
          position={[-20, 20, 20]}
          shadow-camera-top={20}
          shadow-camera-right={20}
          shadow-camera-bottom={-20}
          shadow-camera-left={-20}
        />
        <ambientLight intensity={ 0.2 } />
    </>
}