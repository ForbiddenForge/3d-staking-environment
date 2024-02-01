
import { Physics } from '@react-three/rapier'
import { Environment, KeyboardControls, Loader, Sky, Stars, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense, useMemo } from 'react'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { useRef } from 'react'

import useGame from './stores/useGame.jsx'
import Lights from './Lights.jsx'
import Player from './models/Player.jsx'
import Level from './models/Level.jsx'
import Ground from './models/Ground.jsx'
import  Wizard  from './models/Wizard.jsx'
import { Fog } from 'three'

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
  const characterURL = '../assets/3d/dragonPlayer.glb'

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

  const date = new Date()
  const hour = date.getHours()
  const daytime = useMemo(() => {
    let daytime 
    if(hour > 7 && hour < 21 ) {
      daytime = true
    } else if( 22 <= hour || hour >= 7 ) {
      daytime = false
    }
    console.log(daytime)
    return daytime
  }, [])

 

    return ( 
    <>
        <Perf position={ "top-left" } />
        <color args={['#000000']} attach="background" />
          <Physics debug={ false } timeStep={"vary"}>
            <Lights />

            <Suspense fallback={null}>
              <KeyboardControls map={keyboardMap}>
                <Ecctrl animated position={[10, 10, 0]} maxVelLimit={7} springMult={2}>
                  <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                      <Player />
                  </EcctrlAnimation>
                </Ecctrl>
              </KeyboardControls>
            </Suspense>

            <Level />
            <Ground />
          </Physics>

            <Wizard />
            <Sky distance={45000} sunPosition={[0, -10, 0]} />
            <Sparkles
              count={200}
              scale={5}
              size={5}
              noise={1}
              position={[-25.5, 2, 0]}
            />
            
            {/* causes lag :( */}
            {/* {daytime && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />} */}
            

    </>
    )
}