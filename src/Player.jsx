import React, { useMemo, useRef } from 'react'
import { useGLTF, KeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import dragonPlayer from '/assets/3d/dragonPlayer.glb'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import useGame from './stores/useGame.jsx'



export default function CharacterModel(props) {
  const { nodes, materials, animations } = useGLTF(dragonPlayer)
  const ref = useRef();

    /**
   * Keyboard control preset
   */
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    { name: 'action1', keys: ['1'] },
    { name: 'action2', keys: ['2'] },
    { name: 'action3', keys: ['3'] },
    { name: 'action4', keys: ['KeyF'] }
  ]

  /**
   * Character url preset
   */
  const characterURL = './assets/3d/dragonPlayer.glb'

  /**
   * Character animation set preset
   */
  const animationSet = {
    idle: 'Fast_Flying',
    walk: 'Fast_Flying',
    run: 'Fast_Flying',
    jump: 'Flying_Idle',
    jumpIdle: 'Flying_Idle',
    jumpLand: 'Flying_Idle',
    fall: 'Flying_Idle', // This is for falling from high sky
    action1: 'Yes',
    action2: 'No',
    action3: 'Death',
    action4: 'Punch'
  }

  useMemo(() => {
    for (const material in materials) {
      materials[material].metalness = 0.2
      materials[material].roughness = 0.6
    }
  }, [])


  return (

    <KeyboardControls map={keyboardMap}>
                <Ecctrl 
                animated
                ref={ref} 
                position={[10, 10, 0]} 
                debug={false}
                maxVelLimit={6} 
                springMult={2}
                >
                  <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                  
                  <group {...props} dispose={null}>
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
                  </EcctrlAnimation>
                </Ecctrl>
              </KeyboardControls>
  
    
  )
}

useGLTF.preload('./assets/3d/dragonPlayer.glb')