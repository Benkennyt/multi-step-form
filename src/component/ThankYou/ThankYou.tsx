import React from 'react';
import ModalCheck from './icon-thank-you.svg'
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className='modal'>
      <div className='modal-1'>
        <img src={ModalCheck} alt="thank-you" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}

export default ThankYou