import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useHelper } from "@react-three/drei"
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three"

export default function Lights()
{

    const directionalLightRef = useRef()
    useHelper(directionalLightRef, DirectionalLightHelper, 1, "white");

    const directionalLightRef2 = useRef()
    useHelper(directionalLightRef2, DirectionalLightHelper, 1, "white");

    const pointLightRef = useRef()
    useHelper(pointLightRef, PointLightHelper, 1, "white")

    const pointLightRef2 = useRef()
    useHelper(pointLightRef2, PointLightHelper, 1, "white")

    // useFrame((state) => {
    //     directionalLightRef.current.position.z = state.camera.position.z + 1 - 4
    //     directionalLightRef.current.target.position.z = state.camera.position.z - 4
    //     directionalLightRef.current.target.updateMatrixWorld()

    // })

    return <>
      <Suspense>
        <directionalLight
          ref={ directionalLightRef }
          castShadow
          position={[10, 5, 0]}
          intensity={5}
          color={'#ffffff'}
          shadow-bias={-0.0004}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        />

        {/* <directionalLight
          ref={ directionalLightRef2 }
          intensity={10}
          color={'#FFC9D3'}
          shadow-bias={-0.0004}
          position={[0, 100, 100]}
        /> */}
        <pointLight 
          ref={pointLightRef}
          intensity={100}
          position={[-25, 6, 0]}
          color={'#FFC9D3'}
          distance={100}
          decay={1}
        />
        <pointLight 
          ref={pointLightRef2}
          intensity={10}
          position={[-11, 6, 0]}
          color={'#FFC9D3'}
          distance={100}
          decay={1}
        />
        <ambientLight position={[0, 1, 0]} intensity={ 0.2 } />

      </Suspense>
    </>
}