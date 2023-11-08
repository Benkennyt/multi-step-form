import { useState } from 'react';
import './YourInfo.css';

const YourInfo = (props: any) => {
  const {val, handleBlur, onchange, errors, setPage, touched} = props;
  const [emptyInput, setEmptyInput] = useState(false);

  const ValidateForm = () => {
    if ( val.name === '' || val.phone === '' || val.email === '') {
      return setEmptyInput(true)
    } else if (errors.name || errors.phone || errors.email ) {
      return (errors)
    } else {
      setPage((currPage: number) => currPage + 1)
    }
  };


  return (
    <div className='your-info'>
      <p>Please provide your name, email address, and phone number.</p>

      <div className='your-info-1'>
        <div>
          <div className='input-header'>
            <h5>Name</h5>
            <h5 className='err-h5'>{ errors.name && touched.name ? errors.name : '' }</h5>
          </div>
          <div className={errors.name && touched.name ? 'text-space-error' : 'text-space'}>
            <input
              type='text'
              placeholder='e.g Stephen King'
              id='name'
              value={val.name}
              onChange={onchange}
              onBlur={handleBlur}
             
            />
          </div>
        </div>
        <div>
        <div className='input-header'>
            <h5>Email Address</h5>
            <h5 className='err-h5'>{errors.email && touched.email ? errors.email : ''}</h5>
          </div>
          <div className={errors.email && touched.email  ? 'text-space-error' : 'text-space'}>
           <input 
            type="email" 
            placeholder='e.g stephenking@lorem.com'
            id='email'
            value={val.email}
            onChange={onchange}
            onBlur={handleBlur}
          />
          </div>
        </div>
        <div>
        <div className='input-header'>
            <h5>Phone Number</h5>
            <h5 className='err-h5'>{errors.phone && touched.phone ? errors.phone : ''}</h5>
          </div>
          <div className={errors.phone && touched.phone ? 'text-space-error' : 'text-space'}>
            <input 
              type="text" 
              placeholder='e.g +1 234 567 890'
              id='phone'
              value={val.phone}
              onChange={onchange} 
              onBlur={handleBlur} 
            />
          </div>

          <h5 className='err-h5'>{emptyInput ? 'Kindly provide all requested details.' : '' }</h5>
        </div>

          {/*------------------------------ Foooter --------------------------------------*/}

        </div>
          <div className="footer-info">
            <button
            type='button'
            onClick={ValidateForm}
          >
            Next Step
          </button>
        </div>
    </div>
  );
};

export default YourInfo