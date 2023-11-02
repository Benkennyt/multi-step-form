import './AddOns.css';

const AddOns = () => {
  return (
    <div className='addon'>
      <p className='addon-p'>Add-ons help enhance your gaming experience</p>
      <div className='option-box'>
        <input type='checkbox'/>
        <div>
          <h5>Online service</h5>
          <p>Access to multiplayer games</p>
        </div>
      </div>

      <div className='option-box'>
        <input type='checkbox'/>
        <div>
          <h5>Larger storage</h5>
          <p>Extra 1TB of cloud save</p>
        </div>
      </div>

      <div className='option-box'>
        <input type='checkbox'/>
        <div>
          <h5>Customizable profile</h5>
          <p>Custom theme on your profile</p>
        </div>
      </div>
    </div>
  )
}

export default AddOns