import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import dragonPlayer from '/assets/3d/dragonPlayer.glb'

export default function CharacterModel(props) {
  const { nodes, materials, animations } = useGLTF(dragonPlayer)

  const group = useRef()

  for (const material in materials) {
    materials[material].metalness = 0.2
    materials[material].roughness = 0.6
  }


  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature" rotation={[0, 0, 0]} scale={0.5} position={[0, -0.85, 0]}>
          <skinnedMesh
            castShadow
            name="Dragon"
            geometry={nodes.Dragon.geometry}
            material={materials.Atlas}
            skeleton={nodes.Dragon.skeleton}
          />
          <primitive  object={nodes.Root} />
        </group>
      </group>
    </group>
  
    
  )
}

useGLTF.preload('../assets/3d/dragonPlayer.glb')