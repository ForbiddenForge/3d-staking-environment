
import { Physics } from '@react-three/rapier'
import { Environment, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'

import Lights from './Lights.jsx'
import Level from './models/Level.jsx'
import Player from './models/Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blockSeed = useGame((state) => state.blockSeed)

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
  const characterURL = '../assets/3d/Demon.glb'

  /**
   * Character animation set preset
   */
  const animationSet = {
    idle: 'CharacterArmature|Idle',
    walk: 'CharacterArmature|Walk',
    run: 'CharacterArmature|Run',
    jump: 'CharacterArmature|Jump',
    jumpIdle: 'CharacterArmature|Jump_Idle',
    jumpLand: 'CharacterArmature|Jump_Land',
    fall: 'CharacterArmature|Duck', // This is for falling from high sky
    action1: 'CharacterArmature|Wave',
    action2: 'CharacterArmature|Death',
    action3: 'CharacterArmature|HitReact',
    action4: 'CharacterArmature|Punch'
  }

    return ( 
    <>
        <Perf position={ "top-left" } />
        <color args={['#bdedfc']} attach="background" />
        <Suspense fallback={null}>
          <Physics debug={ true } timeStep={"vary"}>
            <Lights />
            <KeyboardControls map={keyboardMap}>

              <Ecctrl debug animated>
                <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>

                  <Player />

                </EcctrlAnimation>
              </Ecctrl>

            </KeyboardControls>

            <Level />

          </Physics>
        </Suspense>

    </>
    )
}