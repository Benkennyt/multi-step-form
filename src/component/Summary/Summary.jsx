import './Summary.css';

const Summary = () => {
  return (
    <div className='summary'>
      <p className='summary-p'>Double-check everything looks OK before confirming.</p>
      <div className='summary-1'>
        <div className='plan-sum'>
          <div className='plan-sum-1'>
            <h5>Arcade (Yearly)</h5>
            <a href=''>Change</a>
          </div>
          <div className='plan-sum-tt'>
            <h5>
              $90/yr
            </h5>
          </div>
        </div>

        <div className='addons-sum'>
          <div className='addons-sum-1'>
            <p>Online service</p>
            <h6>+$10/yr</h6>
          </div>

          <div className='addons-sum-1'>
            <p>Larger storage</p>
            <h6>+$20/yr</h6>
          </div>
        </div>
      </div>
      <div className='total'>
        <p>Total (per year)</p>
        <h4>$120/yr</h4>
      </div>
    </div>
  )
}

export default Summary