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
    <RigidBody position={[-15, -50.77, 0]} type='fixed' colliders='cuboid'>

      {/* main ground */}
      <mesh dispose={null}>
        <boxGeometry args={[100, 100, 100]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* small step */}
      <mesh position={[17, 50.25, 0]} dispose={null}>
        <boxGeometry args={[5, 0.25, 5]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* front support stone*/}
      <mesh position={[16.5, 50.25, 0]} dispose={null}>
        <boxGeometry args={[3.5, 1, 10]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* back support stone*/}
      <mesh position={[-18, 50.18, 0]} dispose={null}>
        <boxGeometry args={[5, 1, 10]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* right support stone */}
      <mesh position={[0, 50.15, -7]} dispose={null}>
        <boxGeometry args={[35, 1, 4]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* left support stone */}
      <mesh position={[0, 50.15, 7]} dispose={null}>
        <boxGeometry args={[35, 1, 4]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
    </RigidBody>
  
  )
}