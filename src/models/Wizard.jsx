import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Sparkles } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import wizardModel from '/assets/3d/wizard.glb'
import magicSound from '/sounds/magic-wand.mp3'

export default function Wizard({currentStage, setCurrentStage}, ...props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(wizardModel);
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

  useEffect (() => {
    let action
    if (actions && actions['clip_CHARACTER.001']) {
      action = actions['clip_CHARACTER.001'];
      action.play()
    }
    
  }, [actions])




  return (
    <>
    <group 
    ref={group} 
    position={[-25.5, -0.3, 0]} 
    scale={0.15} 
    rotation={[0, 1.8, 0]} 
    {...props} 
    dispose={null}
    onClick={() => {
      setCurrentStage(2)
      playMagicSound()
    }}  
    
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