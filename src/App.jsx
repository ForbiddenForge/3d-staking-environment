import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { EcctrlJoystick } from 'ecctrl'
import { Loader } from '@react-three/drei'
import './style.css'
import { Suspense, useState } from 'react'
import Window from './components/Window.jsx'


export default function App() {

  const [currentStage, setCurrentStage] = useState(null);
  
  

  return(
      <>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <Window currentStage={currentStage} setCurrentStage={setCurrentStage} />}
        </div>

        {currentStage == null && (
          <div id='joystick'>
            <EcctrlJoystick buttonNumber={5} buttonTop1Props/>
          </div>
        )}
        <Suspense>
        <Canvas
            id={currentStage != null ? 'no-canvas-scroll' : 'canvas-scroll'}
            shadows
            // camera={ {
            //     fov: 45,
            //     near: 0.1,
            //     far: 500,
            //     position: [ 2.5, 4, 6 ]
            // } }
        >
            <Experience currentStage={currentStage} setCurrentStage={setCurrentStage}/>
        </Canvas>
        </Suspense>
        {/* <Interface /> */}
        <img className="controlKeys" src="./keyControls.png" alt="control keys" />
        <Loader />
      
      </>

  )

}
