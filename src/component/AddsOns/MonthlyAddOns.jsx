import './AddOns.css';

const MonthlyAddOns = ({val, setFieldValue}) => {

  const MoOnlineService = () => {
    if (val.monthlyAddOns.onlineService === 0) {
      setFieldValue('monthlyAddOns.onlineService', 1)
      setFieldValue('yearlyAddOns.largerStorage', 0)
      setFieldValue('yearlyAddOns.customProfile', 0)
      setFieldValue('yearlyAddOns.onlineService', 0)
    } else {
      setFieldValue('monthlyAddOns.onlineService', 0)
    }
  }

  const MoLargerStorage = () => {
    if (val.monthlyAddOns.largerStorage === 0) {
      setFieldValue('monthlyAddOns.largerStorage', 2)
      setFieldValue('yearlyAddOns.largerStorage', 0)
      setFieldValue('yearlyAddOns.customProfile', 0)
      setFieldValue('yearlyAddOns.onlineService', 0)
    } else {
      setFieldValue('monthlyAddOns.largerStorage', 0)
    }
  }

  const MoCustomProfile = () => {
    if (val.monthlyAddOns.customProfile === 0) {
      setFieldValue('monthlyAddOns.customProfile', 2)
      setFieldValue('yearlyAddOns.largerStorage', 0)
      setFieldValue('yearlyAddOns.customProfile', 0)
      setFieldValue('yearlyAddOns.onlineService', 0)
    } else {
      setFieldValue('monthlyAddOns.customProfile', 0)
    }
  }


  // {moPlanSum > 1 ? +$1/mo :  +$1/Mo}
  // MoPlanSum

  return (
    <div>
      <p className='addon-p'>Add-ons help enhance your gaming experience</p>
      <button onClick={MoOnlineService} type='button' className={val.monthlyAddOns.onlineService === 1 ? 'addon-selected' : 'option-btn'}>

        <div className='input-div'>
          <input type='checkbox' readOnly   checked={val.monthlyAddOns.onlineService === 1 ? true : false } />
        </div>

        <div className='details'>
          <h5>Online service</h5>
          <p>Access to multiplayer games</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$1/mo</p>
        </div>
      </button>

      <button onClick={MoLargerStorage} type='button'  className={val.monthlyAddOns.largerStorage === 2 ? 'addon-selected' : 'option-btn'}>

        <div className='input-div'>
          <input type='checkbox' readOnly  checked={val.monthlyAddOns.largerStorage === 2 ? true : false }/>
        </div>

        <div className='details'>
          <h5>Larger storage</h5>
          <p>Extra 1TB of cloud save</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$2/mo</p>
        </div>
      </button>

      <button onClick={MoCustomProfile} type='button' className={val.monthlyAddOns.customProfile === 2 ? 'addon-selected' : 'option-btn'}>
        
        <div className='input-div'>
          <input type='checkbox' readOnly  checked={val.monthlyAddOns.customProfile === 2 ? true : false }/>
        </div>

        <div className='details'>
          <h5>Customizable profile</h5>
          <p>Custom theme on your profile</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$2/mo</p>
        </div>
      </button>
    </div>
  )
}

export default MonthlyAddOns;