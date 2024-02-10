import StakingDapp from './StakingDapp.jsx'
import { Html } from '@react-three/drei'
import '../style.css'



const Window = ({ currentStage, setCurrentStage }) => {

  const renderContent = {
    1: (
      null
    ),
    2: (
      
      <Html
      center={true}
      position={[-20.5, -0.3, 0]}
      distanceFactor={10}
      wrapperClass='htmlScreen'
      >
          <iframe src="https://displaythestakingdappandstuff849394894839.dragon3d.app/" frameborder="0"></iframe>
      </Html>
      
      ),
    }

  return (
    renderContent[currentStage]
    )
  }
  
export default Window