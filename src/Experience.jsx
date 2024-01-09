
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { BlockSpinner, Level } from './Level.jsx'
import Lights from './Lights.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'
import DragonPath from './models/DragonPath.jsx'
import { OrbitControls } from '@react-three/drei'

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blockSeed = useGame((state) => state.blockSeed)

    return ( 
    <>
        <Perf position={ "top-left" } />
        <color args={['#bdedfc']} attach="background" />
        <OrbitControls makeDefault />
        <Physics debug={ true }>
            <Lights />
            {/* <Level count={ blocksCount } seed={ blockSeed } /> */}
            <DragonPath />
            <Player />
        </Physics>

    </>
    )
}