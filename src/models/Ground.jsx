import { RigidBody } from '@react-three/rapier'
import { useTexture } from '@react-three/drei'
import colorTexture from '/assets/Stylized_Stone_Floor_003_basecolor.jpg'
import aoTexture from '/assets/Stylized_Stone_Floor_003_ambientOcclusion.jpg'
import heightTexture from '/assets/Stylized_Stone_Floor_003_height.png'
import normalTexture from '/assets/Stylized_Stone_Floor_003_normal.jpg'
import roughnessTexture from '/assets/Stylized_Stone_Floor_003_roughness.jpg'

export default function Ground() {

  const [ colorMap, aoMap, heightMap, normalMap, roughnessMap ] = useTexture([
    colorTexture,
    aoTexture,
    heightTexture,
    normalTexture,
    roughnessTexture,
  ])






  return(
    <RigidBody position={[-15, -0.77, 0]} type='fixed' colliders='cuboid'>
      <mesh dispose={null}>
        <boxGeometry args={[100, 0.5, 100]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      <mesh position={[15, 0.5, 0]} dispose={null}>
        <boxGeometry args={[5, 0.5, 5]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      <mesh position={[17, 0.35, 0]} dispose={null}>
        <boxGeometry args={[5, 0.25, 5]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
    </RigidBody>
  
  )
}