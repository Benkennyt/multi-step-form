import ArcadeIcon from './images/icon-arcade.svg';
import AdvancedIcon from './images/icon-advanced.svg';
import ProIcon from './images/icon-pro.svg'

const MonthlyPlan = ({ val, setFieldValue, setErrorState}) => {

  const ArcadeMon = () => {
    if (val.monthlyPlan.arcade === 0) {
      setFieldValue('monthlyPlan.arcade', 9)
      setFieldValue('monthlyPlan.pro', 0)
      setFieldValue('monthlyPlan.advanced', 0)
      setFieldValue('yearlyPlan.arcade', 0)
      setFieldValue('yearlyPlan.pro', 0)
      setFieldValue('yearlyPlan.advanced', 0)
      setErrorState(false)
    } else {
      setFieldValue('monthlyPlan.arcade', 0)
    }
  }

  const ProMon = () => {
    if (val.monthlyPlan.pro === 0) {
      setFieldValue('monthlyPlan.arcade', 0)
      setFieldValue('monthlyPlan.pro', 15)
      setFieldValue('monthlyPlan.advanced', 0)
      setFieldValue('yearlyPlan.arcade', 0)
      setFieldValue('yearlyPlan.pro', 0)
      setFieldValue('yearlyPlan.advanced', 0)
      setErrorState(false)
    } else {
      setFieldValue('monthlyPlan.pro', 0)
    }
  }

  const AdvancedMon = () => {
    if (val.monthlyPlan.advanced === 0) {
      setFieldValue('monthlyPlan.arcade', 0)
      setFieldValue('monthlyPlan.pro', 0)
      setFieldValue('monthlyPlan.advanced', 12)
      setFieldValue('yearlyPlan.arcade', 0)
      setFieldValue('yearlyPlan.pro', 0)
      setFieldValue('yearlyPlan.advanced', 0)
      setErrorState(false)
    } else {
      setFieldValue('monthlyPlan.advanced', 0)
    }
  }
  return (
    <div className="plan">
          <button className = {val.monthlyPlan.arcade === 9 ? 'selected' : 'btn'} type='button'  onClick={ArcadeMon}>
            <img src={ArcadeIcon} alt='arcade-icon' />
            <h5>Arcade</h5>
            <p className='p1'>$9/mo</p>
          </button>

          <button className = {val.monthlyPlan.advanced === 12 ? 'selected' : 'btn'} type='button'  onClick={AdvancedMon}>
            <img src={AdvancedIcon} alt='advanced-icon'/>
            <h5>Advanced</h5>
            <p className='p1'>$12/mo</p>
          </button>

          <button className = {val.monthlyPlan.pro === 15 ? 'selected' : 'btn'} type='button'  onClick={ProMon}>
            <img src={ProIcon} alt='pro-icon'/>
            <h5>Pro</h5>
            <p className='p1'>$15/mo</p>
          </button>
    </div>
  )
}

export default MonthlyPlan