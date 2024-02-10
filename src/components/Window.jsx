import StakingDapp from './StakingDapp.jsx'
import './main.css'



const Window = ({ currentStage, setCurrentStage }) => {

  const renderContent = {
    0: (
      null
    ),
    1: (
      
      <div id='stake-window' className='stake-window absolute left-1 right-1 top-10 z-10'>
        <StakingDapp currentStage={currentStage} setCurrentStage={setCurrentStage} />
      </div>
      
      ),
    }

  return (
    renderContent[currentStage]
    )
  }
  
export default Window