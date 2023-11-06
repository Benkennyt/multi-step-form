import { moPlanSum, yrPlanSum } from '../Summary/Summary';
import './AddOns.css';

const YearlyAddOns = ({val, setFieldValue}) => {

  // const yrAddOns = Object.values(val.monthlyAddOns);
  // const yrAddOnsSum = yrAddOns.reduce((accumulator, currentValue) => accumulator + currentValue);

  // // console.log(yrAddOnsSum + moAddOnsSum)
  // console.log(yrAddOns)
  // console.log(val.monthlyAddOns)
  const YrOnlineService = () => {
    if (val.yearlyAddOns.onlineService === 0) {
      setFieldValue('yearlyAddOns.onlineService', 10)
      setFieldValue('monthlyAddOns.largerStorage', 0)
      setFieldValue('monthlyAddOns.customProfile', 0)
      setFieldValue('monthlyAddOns.onlineService', 0)
    } else {
      setFieldValue('yearlyAddOns.onlineService', 0)
    }
  }

  const YrLargerStorage = () => {
    if (val.yearlyAddOns.largerStorage === 0) {
      setFieldValue('yearlyAddOns.largerStorage', 20)
      setFieldValue('monthlyAddOns.largerStorage', 0)
      setFieldValue('monthlyAddOns.customProfile', 0)
      setFieldValue('monthlyAddOns.onlineService', 0)
    } else {
      setFieldValue('yearlyAddOns.largerStorage', 0)
    }
  }

  const YrCustomProfile = () => {
    if (val.yearlyAddOns.customProfile === 0) {
      setFieldValue('yearlyAddOns.customProfile', 20)
      setFieldValue('monthlyAddOns.largerStorage', 0)
      setFieldValue('monthlyAddOns.customProfile', 0)
      setFieldValue('monthlyAddOns.onlineService', 0)
    } else {
      setFieldValue('yearlyAddOns.customProfile', 0)
    }
  }


  // {moPlanSum > 1 ? +$1/mo :  +$10/yr}
  // yrPlanSum

  return (
    <div>
      <p className='addon-p'>Add-ons help enhance your gaming experience</p>
      <button onClick={YrOnlineService} type='button' className={val.yearlyAddOns.onlineService === 10 ? 'addon-selected' : 'option-btn'}>

        <div className='input-div'>
          <input type='checkbox' readOnly  checked={val.yearlyAddOns.onlineService === 10 ? true : false } />
        </div>

        <div className='details'>
          <h5>Online service</h5>
          <p>Access to multiplayer games</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$10/mo</p>
        </div>
      </button>

      <button onClick={YrLargerStorage} type='button' className={val.yearlyAddOns.largerStorage === 20 ? 'addon-selected' : 'option-btn'}>

        <div className='input-div'>
          <input type='checkbox' readOnly  checked={val.yearlyAddOns.largerStorage === 20 ? true : false }/>
        </div>

        <div className='details'>
          <h5>Larger storage</h5>
          <p>Extra 1TB of cloud save</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$20/mo</p>
        </div>
      </button>

      <button onClick={YrCustomProfile} type='button' className={val.yearlyAddOns.customProfile === 20 ? 'addon-selected' : 'option-btn'}>
        
        <div className='input-div'>
          <input type='checkbox' readOnly checked={val.yearlyAddOns.customProfile === 20 ? true : false }/>
        </div>

        <div className='details'>
          <h5>Customizable profile</h5>
          <p>Custom theme on your profile</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$20/mo</p>
        </div>
      </button>
    </div>
  )
}

export default YearlyAddOns;