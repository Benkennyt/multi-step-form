import './Summary.css';


const Summary = (props: any) => {

  const {val, setPage} = props
  
  const moPlan = Object.values<number>(val.monthlyPlan);
  const moPlanSum = moPlan.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  const yrPlan = Object.values<number>(val.yearlyPlan);
  const yrPlanSum = yrPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  const yrAddOns = Object.values<number>(val.yearlyAddOns);
  const yrAddOnsSum = yrAddOns.reduce((accumulator, currentValue) => accumulator + currentValue);

  const moAddOns = Object.values<number>(val.monthlyAddOns);
  const moAddOnsSum = moAddOns.reduce((accumulator, currentValue) => accumulator + currentValue);

  const total = moPlanSum + yrPlanSum + yrAddOnsSum + moAddOnsSum;

  const SelectedPlanDisplay = () => {
    if (val.monthlyPlan.arcade || val.yearlyPlan.arcade > 1) {
      return ('Arcade')
    } else if (val.monthlyPlan.pro || val.yearlyPlan.pro > 1){
      return (' Pro')
    } else if (val.monthlyPlan.advanced || val.yearlyPlan.advanced > 1) {
      return ('Advanced')
    }
  }


  const AddOnsSumHidden = () => {
    if ( val.monthlyAddOns.onlineService || val.yearlyAddOns.onlineService || val.monthlyAddOns.largerStorage || val.yearlyAddOns.largerStorage || val.monthlyAddOns.customProfile || val.yearlyAddOns.customProfile ) {
      return 'addons-sum'
    }else {
      return 'addons-sum-1-hidden'
    }
  }

  return (
    <div className='summary'>
      <p className='summary-p'>Double-check everything looks OK before confirming.</p>
      <div className='summary-2'>
        <div className='summary-1'>
          <div className='plan-sum'>
            <div className='plan-sum-1'>
              <h5>{SelectedPlanDisplay()} ({moPlanSum > 0 ? 'Monthly' : 'Yearly'})</h5>
              <button className='change' onClick={() => {setPage(1)}}>Change</button>
            </div>

            <div className='plan-sum-tt'>
              <h5>
                ${moPlanSum || yrPlanSum }/{moPlanSum > 0 ? 'mo' : 'yr'}
              </h5>
            </div>
          </div>

          
          <div className={AddOnsSumHidden()}>
            <div className={ val.monthlyAddOns.onlineService || val.yearlyAddOns.onlineService ?  'addons-sum-1' : 'addons-sum-1-hidden'}>
              <p>Online service</p>
              <h6>{val.monthlyAddOns.onlineService === 1 ? '+$1/mo' : '+$10/yr' }</h6>
            </div>

            <div className={ val.monthlyAddOns.largerStorage || val.yearlyAddOns.largerStorage ?  'addons-sum-1' : 'addons-sum-1-hidden'}>
              <p>Larger storage</p>
              <h6>{val.monthlyAddOns.largerStorage === 2 ? '+$2/mo' : '+$20/yr' }</h6>
            </div>

            <div className={ val.monthlyAddOns.customProfile || val.yearlyAddOns.customProfile ?  'addons-sum-1' : 'addons-sum-1-hidden'}>
              <p>Customizable profile</p>
              <h6>{val.monthlyAddOns.customProfile === 2  ? '+$2/mo' : '+$20/yr' }</h6>
            </div>
          </div>
        </div>

        <div className='total'>
          <p>Total (per {moPlanSum > 1 ? 'month' : 'year'})</p>
          <h4>+${total}/{moPlanSum > 1 ? 'mo' : 'yr'}</h4>
        </div>
      </div>


          {/*------------------------------ Foooter --------------------------------------*/}
          
      <div className="summary-footer">
        <button
        type='button'
        onClick={() => {
            setPage((currPage:number) => currPage - 1);
        }}
        >
        Go Back
        </button>

        <button 
          onClick={() => {
            setPage((currPage: number) => currPage + 1)
            }}
          type='submit'
        >Confirm</button>
      </div>
    </div>
  )
}

export default Summary;