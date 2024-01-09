import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { KeyboardControls, OrbitControls } from "@react-three/drei"
import Interface from './Interface.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls
        map={ [
            { name:'forward', keys: ['ArrowUp', 'KeyW'] },
            { name:'backward', keys: ['ArrowDown', 'KeyS'] },
            { name:'left', keys: ['ArrowLeft', 'KeyA'] },
            { name:'right', keys: ['ArrowRight', 'KeyD'] },
            { name: 'jump', keys: ['Space'] },
        ] }
    >
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 500,
                position: [ 2.5, 4, 6 ]
            } }
        >
            <Experience />
        </Canvas>
        {/* <Interface /> */}
    </KeyboardControls>
)