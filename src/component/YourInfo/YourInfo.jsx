import { useState } from 'react';
import './YourInfo.css';

const YourInfo = ({val, onblur, onchange, errors, touched,setPage, page}) => {
  const [manualValidation, setManualValidation] = useState(false)

  console.log()
  const Validate = () => {
   
    setPage((currPage) => currPage + 1)
    // if (val.name && val.phone && val.email ) {
    //   setManualValidation(false)
    // } else {
    //   setManualValidation(true)
      
    // }

    console.log(manualValidation)
  }



  return (
    <div className='your-info'>
      <p>Please provide your name, email address, and phone number.</p>

      <div className='your-info-1'>
        <div>
          <div className='input-header'>
            <h5>Name</h5>
            <h5 className='err-h5'>{!manualValidation  ? errors.name : ''}</h5>
          </div>
          <div className={errors.name && !manualValidation ? 'text-space-error' : 'text-space'}>
            <input
              type='text'
              placeholder='e.g Stephen King'
              id='name'
              value={val.name}
              onChange={onchange}
              onBlur={onblur}
            />
          </div>
        </div>
        <div>
        <div className='input-header'>
            <h5>Email Address</h5>
            <h5 className='err-h5'>{!manualValidation ? errors.email : ''}</h5>
          </div>
          <div className={errors.email && !manualValidation ? 'text-space-error' : 'text-space'}>
           <input 
            type="email" 
            placeholder='e.g stephenking@lorem.com'
            id='email'
            value={val.email}
            onChange={onchange}
            onBlur={onblur}
          />
          </div>
        </div>
        <div>
        <div className='input-header'>
            <h5>Phone Number</h5>
            <h5 className='err-h5'>{!manualValidation ? errors.phone : ''}</h5>
          </div>
          <div className={errors.phone && !manualValidation ? 'text-space-error' : 'text-space'}>
            <input 
              type="text" 
              placeholder='e.g +1 234 567 890'
              id='phone'
              value={val.phone}
              onChange={onchange} 
              onBlur={onblur} 
            />
          </div>
        </div>


        </div>
          {/* Foooter */}
          <div className="footer-info">
            <button
            type='button'
            // disabled={manualValidation}
            onClick={Validate}
          >
            Next Step
          </button>
        </div>
    </div>
  )
}

export default YourInfo