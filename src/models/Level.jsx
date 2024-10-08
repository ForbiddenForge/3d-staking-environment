import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useMemo, useRef } from 'react'
import dojoModel from '/assets/3d/dojoCompressed.glb'

export default function Level(props) {
  const { nodes, materials } = useGLTF(dojoModel)
  const levelRef = useRef()

  useMemo(() => {
    for (const material in materials) {
      materials[material].metalness = 0.5
      materials[material].roughness = 1
    }
  }, [])

  return (
    <RigidBody ref={levelRef} type="fixed" colliders="trimesh" position={[-18, 0, 0]}>
        <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.room.geometry}
          material={materials.dojo_atlas}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drum.geometry}
          material={materials.dojo_atlas}
          position={[-12.124, 0.344, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.009}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('../assets/3d/dojoCompressed.glb')