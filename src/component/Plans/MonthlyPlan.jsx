import ArcadeIcon from './images/icon-arcade.svg';
import AdvancedIcon from './images/icon-advanced.svg';
import ProIcon from './images/icon-pro.svg'

const MonthlyPlan = () => {
  return (
    <div className="plan">
        <button type="button">
          <img src={ArcadeIcon} alt='arcade-icon' />
          <h5>Arcade</h5>
          <p className='p1'>$9/mo</p>
        </button>

        <button type="button">
          <img src={AdvancedIcon} alt='advanced-icon'/>
          <h5>Advanced</h5>
          <p className='p1'>$12/mo</p>
        </button>

        <button type="button">
          <img src={ProIcon} alt='pro-icon'/>
          <h5>Pro</h5>
          <p className='p1'>$15/mo</p>
        </button>
    </div>
  )
}

export default MonthlyPlan