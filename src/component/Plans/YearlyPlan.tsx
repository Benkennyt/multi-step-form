import ArcadeIcon from './images/icon-arcade.svg';
import AdvancedIcon from './images/icon-advanced.svg';
import ProIcon from './images/icon-pro.svg';


const YearlyPlan = (props: any) => {
  const {val, setFieldValue, setErrorState} = props

  const ArcadeYr = () => {
    if (val.yearlyPlan.arcade === 0) {
      setFieldValue('monthlyPlan.arcade', 0)
      setFieldValue('monthlyPlan.pro', 0)
      setFieldValue('monthlyPlan.advanced', 0)
      setFieldValue('yearlyPlan.arcade', 90)
      setFieldValue('yearlyPlan.pro', 0)
      setFieldValue('yearlyPlan.advanced', 0)
      setErrorState(false)
    } else {
      setFieldValue('yearlyPlan.arcade', 0)
    }
  }

  const ProYr = () => {
    if (val.yearlyPlan.pro === 0) {
      setFieldValue('monthlyPlan.arcade', 0)
      setFieldValue('monthlyPlan.pro', 0)
      setFieldValue('monthlyPlan.advanced', 0)
      setFieldValue('yearlyPlan.arcade', 0)
      setFieldValue('yearlyPlan.pro', 150)
      setFieldValue('yearlyPlan.advanced', 0)
      setErrorState(false)
    } else {
      setFieldValue('yearlyPlan.pro', 0)
    }
  }

  const AdvancedYr = () => {
    if (val.yearlyPlan.advanced === 0) {
      setFieldValue('monthlyPlan.arcade', 0)
      setFieldValue('monthlyPlan.pro', 0)
      setFieldValue('monthlyPlan.advanced', 0)
      setFieldValue('yearlyPlan.arcade', 0)
      setFieldValue('yearlyPlan.pro', 0)
      setFieldValue('yearlyPlan.advanced', 120)
      setErrorState(false)
    } else {
      setFieldValue('yearlyPlan.advanced', 0)
    }
  }
  return (
    <div className="plan">
        <button className = {val.yearlyPlan.arcade === 90 ? 'selected' : 'btn'} type="button" onClick={ArcadeYr}>
          <img src={ArcadeIcon} alt='arcade-icon' />
          <div className='h5p'>
            <h5>Arcade</h5>
            <p className='p1'>$90/yr</p>
            <p className='p2'>2 months free</p>
          </div>
        </button>

        <button className = {val.yearlyPlan.advanced === 120 ? 'selected' : 'btn'} id='btn2' type="button" onClick={AdvancedYr}>
          <img src={AdvancedIcon} alt='advanced-icon'/>
          <div className='h5p'>
            <h5>Advanced</h5>
            <p className='p1'>$120/yr</p>
            <p className='p2'>2 months free</p>
          </div>
        </button>

        <button className = {val.yearlyPlan.pro === 150 ? 'selected' : 'btn'} type="button" onClick={ProYr}>
          <img src={ProIcon} alt='pro-icon'/>
          <div className='h5p'>
            <h5>Pro</h5>
            <p className='p1'>$150/yr</p>
            <p className='p2'>2 months free</p>
          </div>
        </button>
    </div>
  )
}

export default YearlyPlan