import StakingDapp from './StakingDapp.jsx'
import './main.css'



const Window = ({ currentStage, setCurrentStage }) => {

  const renderContent = {
    1: (
      
      <div id='stake-window' className='stake-window'>
        <StakingDapp currentStage={currentStage} setCurrentStage={setCurrentStage} />
      </div>
      
      ),
    }

  return (
    renderContent[currentStage] || null
    )
  }
  
export default Window