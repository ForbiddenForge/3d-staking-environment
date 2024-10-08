import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Sparkles, MeshPortalMaterial, Html, Environment, Outlines} from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import wizardModel from '/assets/3d/wizard.glb'
import magicSound from '/sounds/magic-wand.mp3'
import aoboxModel from '/assets/3d/aobox-transformed.glb'

export default function Wizard({currentStage, setCurrentStage}, ...props) {
  const group = useRef();
  const hologramCubeRef = useRef();

  const [hovered, setHovered] = useState(false);
  const { nodes, materials, animations } = useGLTF(wizardModel);
  const { nodes: aoboxNodes } = useGLTF(aoboxModel);
  const { actions } = useAnimations(animations, group);
  
  for (const material in materials) {
    materials[material].metalness = 0.9
    materials[material].roughness = 1

  }
  const magicSoundRef = useRef(new Audio(magicSound))
  magicSoundRef.current.volume = 0.3;
  magicSoundRef.current.loop = false;

  const playMagicSound = () => {
    magicSoundRef.current.play()
  }

  const closeStakingWindow = () => {
    setCurrentStage(1)
  }

  useEffect (() => {
    let action
    if (actions && actions['clip_CHARACTER.001']) {
      action = actions['clip_CHARACTER.001'];
      action.play()
    }
    
  }, [actions])

  useFrame(() => {
    if (hologramCubeRef.current.rotation) {
      hologramCubeRef.current.rotation.y += 0.01;
    }
  })




  return (
    <>

      <mesh
        ref={hologramCubeRef}
        position={[-23, 0.5, -3]}
        scale={hovered ? 1.5 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
          setCurrentStage(2);
          playMagicSound();
        }}
      >
        <boxGeometry args={[1, 1, 0.1]} />
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />

          <mesh castShadow receiveShadow geometry={aoboxNodes.Cube.geometry}>
            <meshStandardMaterial aoMapIntensity={1} aoMap={aoboxNodes.Cube.material.aoMap} color={'lightblue'} />
            <spotLight castShadow color={'lightblue'} intensity={2} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
          </mesh>
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[0.2, 0.05, 128, 32]} />
            <meshLambertMaterial color={'hotpink'} />
          </mesh>
        </MeshPortalMaterial>

        {hovered && <Outlines thickness={0.1} color={'hotpink'} />}
      </mesh>


    <group 
    ref={group} 
    position={[-25.5, -0.3, 0]} 
    scale={0.15} 
    rotation={[0, 1.8, 0]} 
    {...props} 
    dispose={null}
    >
    <Sparkles
              count={500}
              scale={[20, 3, 20]}
              size={5}
              noise={2}
              position={[0, 2, 0]}
      />

      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="CHARACTER_185">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={materials.character_metal_mat}
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_38.skeleton}
                  />
                  <skinnedMesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.character_mat}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <group name="bottle_3_geoPIV_171" />
                  <group name="bottle_4_geoPIV_172" />
                  <group name="cane_geo_173" />
                  <group name="chest_bot_geoPIV_174" />
                  <group name="chest_top_geoPIV_175" />
                  <group name="cloak_geo_176" />
                  <group name="eyebrows_geo_177" />
                  <group name="glasses_geo_178" />
                  <group name="hands_geo_179" />
                  <group name="hat_geo_180" />
                  <group name="head_geo_181" />
                  <group name="jar_geoPIV_182" />
                  <group name="moustache_geo_183" />
                  <group name="pants_geo_184" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </>
  );
}

useGLTF.preload("../assets/3d/wizard.glb");