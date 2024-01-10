import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'

export default function Level(props) {
  const { nodes, materials } = useGLTF('../assets/3d/dojo.glb')
  const levelRef = useRef()

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

useGLTF.preload('../assets/3d/dojo.glb')