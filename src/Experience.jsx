
import { Physics } from '@react-three/rapier'
import {KeyboardControls, Sky, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense, useMemo } from 'react'

import Lights from './Lights.jsx'
import Player from './Player.jsx'
import Level from './models/Level.jsx'
import Ground from './models/Ground.jsx'
import  Wizard  from './models/Wizard.jsx'
import StarMap from './models/StarMap.jsx'
import SkyMap from './models/SkyMap.jsx'


export default function Experience({currentStage, setCurrentStage}) {
  

  const date = new Date()
  const hour = date.getHours()
  const daytime = useMemo(() => {
    let daytime 
    if(hour > 7 && hour < 21 ) {
      daytime = true
    } else if( 21 <= hour || hour >= 7 ) {
      daytime = false
    }
    return daytime
  }, [])
  
 

    return ( 
    <>
        <Perf hidden position={ "top-left" } />

        {!daytime && <StarMap />}
        {daytime && <SkyMap />}
        <fog attach="fog" args={['#faead4', 0, 150]} />
        
        <Lights />

          <Physics debug={ false } timeStep={"vary"}>

            <Suspense fallback={null}>
              <Player />
            </Suspense>

            <Level />
            <Ground />
          </Physics>

        <Wizard currentStage={currentStage} setCurrentStage={setCurrentStage} />
            

    </>
    )
}