import { RigidBody, useRapier } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"

import { useEffect, useRef, useState } from "react"

import * as THREE from 'three'
import useGame from "./stores/useGame.jsx"



export default function Player() {

    const playerBallRef = useRef()
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const { rapier, world } = useRapier()
    const rapierWorld = world

    const [ lerpedCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ lerpedCameraTargetPosition ] = useState(() => new THREE.Vector3())

    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const restart = useGame((state) => state.restart)
    const blocksCount = useGame((state) => state.blocksCount)



    const jump = () => {
        const originRay = playerBallRef.current.translation()
        originRay.y -= 0.31
        const directionRay = { x: 0, y: -1, z: 0 } 
        const ray = new rapier.Ray(originRay, directionRay)
        const rayCollision = rapierWorld.castRay(ray, 10, true)

        if(rayCollision.toi < 0.15) {
            playerBallRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
        }
    }

    const reset = () => {
        
        playerBallRef.current.setTranslation({x: 0, y: 1, z: 0})
        playerBallRef.current.setLinvel({x: 0, y: 0, z: 0})
        playerBallRef.current.setAngvel({x: 0, y: 0, z: 0})

    }


    useEffect(() => {
        
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {

                if(value === 'ready'){
                    reset()
                }

            }
        )

        const unsubscribeJump = subscribeKeys(
            (state) => {
                return state.jump
            },

            (value) => {
                if(value) {
                    jump()
                }
            }
        )

        const unsubscribeAny = subscribeKeys(
            () => {
                start()
            }
        )

        return () => {
            unsubscribeJump()
            unsubscribeAny()
            unsubscribeReset()
        }

    }, [])

    // Directional Player Controls
    useFrame((state, delta) => {

        /**
         * Player Controls
         */
        const { forward, backward, left, right } = getKeys()

        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = 0.3 * delta
        const torqueStrength = 0.1 * delta

        if(forward) {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }
        
        if(right) {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if(backward) {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        if(left) {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }

        playerBallRef.current.applyImpulse(impulse)
        playerBallRef.current.setNextKinematicRotation(torque)
      

        /**
         * Camera
         */
        const playerPosition = playerBallRef.current.translation()

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(playerPosition)
        cameraPosition.z += 1
        cameraPosition.y += 1.5
        cameraPosition.x += 1.5

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(playerPosition)
        cameraTarget.y += 0.25

        lerpedCameraPosition.lerp(cameraPosition, 6 * delta)
        lerpedCameraTargetPosition.lerp(cameraTarget, 6 * delta)

        state.camera.position.copy(lerpedCameraPosition)
        state.camera.lookAt(lerpedCameraTargetPosition)

        /**
         * Phases
         */

        // if(playerPosition.z < -(blocksCount * 4 + 2)) {
        //     end()
        // }

        // if(playerPosition.y < -6) {
        //     restart()
        // }
        

    })


    return (
        <RigidBody
            ref={ playerBallRef }
            canSleep={ false } 
            colliders="ball"
            restitution={ 0.2 }
            friction={ 1 }
            linearDamping={ 0.7 }
            angularDamping={ 0.7 }
            position={ [0, 1, 0] }
            gravityScale={0.2}
        >
            <mesh castShadow>
                <icosahedronGeometry args={ [0.3, 1] } /> 
                <meshStandardMaterial flatShading color="mediumpurple" />
            </mesh>
        </RigidBody>
    )
}