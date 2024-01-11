import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { EcctrlJoystick } from 'ecctrl'
import { Loader } from '@react-three/drei'
import './style.css'
import { Suspense } from 'react'

export default function App() {

  return(
      <>
        <div id='joystick'>
          <EcctrlJoystick buttonNumber={5} buttonTop1Props/>
        </div>
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
            <Experience />
        </Canvas>
        </Suspense>
        {/* <Interface /> */}
        <img class="controlKeys" src="./keyControls.png" alt="control keys" />
        <Loader />
      
      </>

  )

}
