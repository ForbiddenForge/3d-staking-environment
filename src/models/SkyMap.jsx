import { Cloud, Clouds, Sky } from '@react-three/drei'
import * as THREE from 'three'

export default function SkyMap(props) {

  return(
    <>
      <Sky distance={45000} sunPosition={[50, 30, 0]} />
      <Clouds position={[0, 150, 0]} limit={400} material={THREE.MeshLambertMaterial}>
          <Cloud position={[100, 0, 0]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="ivory" fade={50} growth={2}/>
          <Cloud position={[-100, 0, 0]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="ivory" fade={50} growth={2} />
          <Cloud position={[0, 0, 100]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="ivory" fade={50} growth={2} />
          <Cloud position={[0, 0, -100]} segments={10} bounds={[100, 10, 100]} scale={1} volume={200} color="ivory" fade={50} growth={2} />
      </Clouds>
    
    </>
  )
}