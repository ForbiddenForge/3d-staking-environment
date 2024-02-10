import StakingDapp from './StakingDapp.jsx'
import { Html } from '@react-three/drei'
import '../style.css'



const Window = ({ currentStage, setCurrentStage }) => {

  const closeStakingWindow = () => {
    setCurrentStage(1)
  }

  const renderContent = {
    1: (
      null
    ),
    2: (
      
      <Html
      center={true}
      position={[-23.5, -0.3, 0]}
      distanceFactor={10}
      wrapperClass='htmlScreen'
      >
        <div 
          className='flex justify-center items-center mb-1'
        >
          <button 
            className='connect-btn w-50'
            onClick={closeStakingWindow}
          >
          Close Staking
          </button>
        </div>
          <iframe 
            src="https://displaythestakingdappandstuff849394894839.dragon3d.app/" 
            className='overflow-hidden'
          >

          </iframe>
          <div 
          className='flex justify-center items-center mt-0'
        >
          <button 
            className='connect-btn w-50'
            onClick={closeStakingWindow}
          >
          Close Staking
          </button>
        </div>
      </Html>
      
      ),
    }

  return (
    renderContent[currentStage]
    )
  }
  
export default Window