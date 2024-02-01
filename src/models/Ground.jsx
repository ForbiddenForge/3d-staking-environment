import { RigidBody } from '@react-three/rapier'
import { useTexture } from '@react-three/drei'
import colorTexture from '/assets/textures/Stylized_Stone_Floor_003_basecolor.jpg'
import aoTexture from '/assets/textures/Stylized_Stone_Floor_003_ambientOcclusion.jpg'
import heightTexture from '/assets/textures/Stylized_Stone_Floor_003_height.png'
import normalTexture from '/assets/textures/Stylized_Stone_Floor_003_normal.jpg'
import roughnessTexture from '/assets/textures/Stylized_Stone_Floor_003_roughness.jpg'
import woodTexture from '/assets/textures/wood.jpg'
import * as THREE from 'three'
import { useMemo } from 'react'

export default function Ground() {

  const [ colorMap, aoMap, heightMap, normalMap, roughnessMap, woodColorMap ] = useTexture([
    colorTexture,
    aoTexture,
    heightTexture,
    normalTexture,
    roughnessTexture,
    woodTexture,
  ])

  useMemo(() => {
    colorMap.repeat.set(8, 8)
    aoMap.repeat.set(8, 8)
    heightMap.repeat.set(8, 8)
    normalMap.repeat.set(8, 8)
    roughnessMap.repeat.set(8, 8)

    colorMap.wrapS = THREE.RepeatWrapping
    aoMap.wrapS = THREE.RepeatWrapping
    heightMap.wrapS = THREE.RepeatWrapping
    normalMap.wrapS = THREE.RepeatWrapping
    roughnessMap.wrapS = THREE.RepeatWrapping

    colorMap.wrapT = THREE.RepeatWrapping
    aoMap.wrapT = THREE.RepeatWrapping
    heightMap.wrapT = THREE.RepeatWrapping
    normalMap.wrapT = THREE.RepeatWrapping
    roughnessMap.wrapT = THREE.RepeatWrapping
  }, [])





  return(
    <RigidBody position={[-15, -50.77, 0]} type='fixed' colliders='cuboid'>

      {/* main ground */}
      <mesh dispose={null}>
        <boxGeometry args={[100, 100, 100]}/>
        <meshStandardMaterial map={colorMap} aoMap={aoMap} heightMap={heightMap} normalMap={normalMap} roughnessMap={roughnessMap} />
      </mesh>
      {/* small step */}
      <mesh position={[19, 50.15, 0]} dispose={null}>
        <boxGeometry args={[7, 0.35, 5]}/>
        <meshStandardMaterial map={woodColorMap}  />
      </mesh>
      {/* large step */}
      <mesh position={[16.5, 50.25, 0]} dispose={null}>
        <boxGeometry args={[7, 1, 19]}/>
        <meshStandardMaterial map={woodColorMap}  />
      </mesh>
      {/* back support stone*/}
      <mesh position={[-18, 50.18, 0]} dispose={null}>
        <boxGeometry args={[5, 1, 18.5]}/>
        <meshStandardMaterial map={woodColorMap}  />
      </mesh>
      {/* right support stone */}
      <mesh position={[-2, 50.15, -8]} dispose={null}>
        <boxGeometry args={[30, 1, 3]}/>
        <meshStandardMaterial map={woodColorMap}  />
      </mesh>
      {/* left support stone */}
      <mesh position={[-2, 50.15, 8]} dispose={null}>
        <boxGeometry args={[30, 1, 3]}/>
        <meshStandardMaterial map={woodColorMap}  />
      </mesh>
    </RigidBody>
  
  )
}