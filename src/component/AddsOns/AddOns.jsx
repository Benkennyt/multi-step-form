import './AddOns.css';

const AddOns = () => {
  return (
    <div  className='addon'>
      <p className='addon-p'>Add-ons help enhance your gaming experience</p>
      <button className='option-btn'>

        <div className='input-div'>
          <input type='checkbox'/>
        </div>

        <div className='details'>
          <h5>Online service</h5>
          <p>Access to multiplayer games</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$2/mo</p>
        </div>
      </button>

      <button className='option-btn'>

        <div className='input-div'>
          <input type='checkbox'/>
        </div>

        <div className='details'>
          <h5>Larger storage</h5>
          <p>Extra 1TB of cloud save</p>
        </div>

        <div className='price-div'>
          <p className='price-p'>+$2/mo</p>
        </div>
      </button>

      <button className='option-btn'>
        
        <div className='input-div'>
          <input type='checkbox'/>
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

export default AddOns