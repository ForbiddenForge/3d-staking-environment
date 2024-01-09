
import { Physics, RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DragonPath(props) {
  const { nodes, materials } = useGLTF("../assets/3d/untitled.glb");
  return (
    <RigidBody 
      type='fixed'
      colliders='trimesh'  
      restitution={ 0.2 } 
      friction={ 0.5 }
      scale={10}
      position={[2, -3, -55]}
    >

<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.snk_txt}
        position={[-0.416, -1.601, -0.706]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.platform.geometry}
        material={materials.snake_texture}
        position={[-0.212, 0.095, 6.216]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.577, 0.577, 0.025]}
      />
      <group
        position={[-0.252, -0.023, 7.301]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials.orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.red}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tail.geometry}
        material={materials.snk_txt}
        position={[-0.212, 0, 6.075]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={materials.snk_txt}
        position={[-0.212, 0, 6.075]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    </RigidBody>
  );
}

useGLTF.preload("../assets/3d/untitled.glb");
