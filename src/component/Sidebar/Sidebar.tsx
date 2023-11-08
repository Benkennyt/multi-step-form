import React from "react";
import './Sidebar.css'



const Sidebar = (props: any) => {
  const {page}=props
  return (
    <div className='sidebar'>
      <div className='steps'>
        <div className='step'>
          <div className='step-details-1'>
            <div className={page === 0 ? 'step-details-1a-active' : 'step-details-1a'}>1</div>
          </div>

          <div className='step-details-2'>
            <p>STEP 1</p>
            <h4>YOUR INFO</h4>
          </div>
        </div>

        <div className='step'>
          <div className='step-details-1'>
            <div className={page === 1 ? 'step-details-1a-active' : 'step-details-1a'}>2</div>
          </div>

          <div className='step-details-2'>
            <p>STEP 2</p>
            <h4>SELECT PLAN</h4>
          </div>
        </div>

        <div className='step'>
          <div className='step-details-1'>
            <div className={page === 2 ? 'step-details-1a-active' : 'step-details-1a'}>3</div>
          </div>

          <div className='step-details-2'>
            <p>STEP 3</p>
            <h4>ADD-ONS</h4>
          </div>
        </div>

        <div className='step'>
          <div className='step-details-1'>
            <div className={page === 3 || page === 4 ? 'step-details-1a-active' : 'step-details-1a'}>4</div>
          </div>

          <div className='step-details-2'>
            <p>STEP 4</p>
            <h4>SUMMARY</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar