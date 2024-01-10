import { useKeyboardControls } from "@react-three/drei"
import useGame from "./stores/useGame.jsx"
import { useRef, useEffect } from "react"
import { addEffect } from "@react-three/fiber"

export default function Interface() {

	const forward = useKeyboardControls((state) => state.forward)
	const right = useKeyboardControls((state) => state.right)
	const backward = useKeyboardControls((state) => state.backward)
	const left = useKeyboardControls((state) => state.left)
	const jump = useKeyboardControls((state) => state.jump)

	const restart = useGame((state) => state.restart)
	const phase = useGame((state) => state.phase)

	const time = useRef()

	useEffect(() => {

		const unsubscribeEffect = addEffect(() => {
			
			const state = useGame.getState()

			let elapsedTime = 0

			if(state.phase === 'playing') {
				elapsedTime = Dates.now() - state.startTime
			} else if(state.phase === 'ended'){
				elapsedTime = state.endTime - state.startTime
			}

			elapsedTime /= 1000
			elapsedTime = elapsedTime.toFixed(2)

			if(time.current) {
				time.current.textContent = elapsedTime
			}

		})

		return () => {

			unsubscribeEffect()

		}

	}, [])

    



	return (
		<div className="interface">
			{/* Time */}
			<div ref={ time } className="time">0.00</div>
			{/* Restart */}
			{phase === 'ended' && <div className="restart" onClick={restart}>Restart</div>}
			{/* Controls Display */}
			<div className="controls">
				<div className="raw">
					<div className={ `key ${ forward ? 'active' : '' }` }>w</div>
				</div>
				<div className="raw">
					<div className={ `key ${ left ? 'active' : '' }` }>a</div>
					<div className={ `key ${ backward ? 'active' : '' }` }>s</div>
					<div className={ `key ${ right ? 'active' : '' }` }>d</div>
				</div>
				<div className="raw">
					<div className={ `key ${ jump ? 'active large' : 'large' }` }>space</div>
				</div>

			</div>

		</div>
	) 
}