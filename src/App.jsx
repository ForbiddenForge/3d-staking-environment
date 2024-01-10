import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { EcctrlJoystick } from 'ecctrl'
import './style.css'

export default function App() {

  return(
      <>
        <div id='joystick'>
          <EcctrlJoystick buttonNumber={5} buttonTop1Props/>
        </div>
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
        {/* <Interface /> */}
      
      </>

  )

}
