// import StakingDapp from './StakingDapp.jsx'
import { Html } from '@react-three/drei'
import '../style.css'


const Window = ({ currentStage, setCurrentStage }) => {

  const closeStakingWindow = () => {
    setCurrentStage(1)
  }

  const closeStakeInfoWindow = () => {
    document.getElementById('stakeWindow').style.display = 'none'
  
  }

  const renderContent = {
    1: (
      null
    ),
    2: (
      
      <Html
      center={true}
      position={[-26.5, -0.3, 0]}
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
      3: (
        <Html
          center={true}
          position={[10, 2, 0]}
        >
          <div id='stakeWindow' className='w-96 text-sm sm:leading-snug text-center neo-brutalism-blue py-4 px-3 text-white mx-2 opacity-90'>
            <div className='flex flex-1'>
              <div className='flex flex-col text-center mr-5'>
                  <img className='w-20 h-25 mr-5' src={'/assets/images/stakeWizard.png'} alt="" />
                  <p className='text-center'>Stake Wizard</p>
              </div>
              <br />
              <br />
              <br />
              <div className='text-left'>
                <p>It is I, the Stake Wizard.... again.  </p>
                <p>I see you've made it through the portal!</p>
                <p>Approach me in the Stake Dojo and click the mystical stake button rotating next to me!</p>
              </div>
              <br />
            </div>
            <br />
            <br />
            <div className='flex justify-center space-x-5'>
              <button className='connect-btn' onClick={closeStakeInfoWindow}>Close</button>
            </div>
          </div>
        </Html>
        ),
    }

  return (
    renderContent[currentStage]
    )
  }
  
export default Window