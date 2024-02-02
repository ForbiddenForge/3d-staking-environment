import { Cloud, Clouds, Stars } from "@react-three/drei"
import * as THREE from 'three'

export default function StarMap(props) {


  return (
    <>
      <color args={['#000000']} attach="background" />
      <Stars radius={100} depth={600} count={2000} factor={15} saturation={1} fade speed={3} />
      <Clouds position={[0, 150, 0]} limit={400} material={THREE.MeshLambertMaterial}>
          <Cloud position={[100, 0, 0]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="#4d4d4d" fade={50} opacity={0.2}/>
          <Cloud position={[-100, 0, 0]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="#4d4d4d" fade={50} opacity={0.2} />
          <Cloud position={[0, 0, 100]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="#4d4d4d" fade={50} opacity={0.2} />
          <Cloud position={[0, 0, -100]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="#4d4d4d" fade={50} opacity={0.2} />
      </Clouds>
    </>
  )
}
