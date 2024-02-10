import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { EcctrlJoystick } from 'ecctrl'
import { Loader, Html } from '@react-three/drei'
import './style.css'
import { Suspense, useState } from 'react'
import Window from './components/Window.jsx'
import { useEffect } from 'react'


export default function App() {

  const [currentStage, setCurrentStage] = useState(0);
  
  useEffect(() => {
    console.log(currentStage)
  })
  

  return(
      <>
        <Window currentStage={currentStage} setCurrentStage={setCurrentStage} />


        {currentStage === 0 && (
          <div id='joystick'>
            <EcctrlJoystick buttonNumber={5} buttonTop1Props/>
          </div>
        )}

        <Suspense>
        <Canvas
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
