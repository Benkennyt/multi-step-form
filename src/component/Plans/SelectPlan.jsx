import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import Switch from "./Switch";
import { useState } from "react";
import './SelectPlan.css';


const SelectPlan = ({val, setFieldValue, setPage, page,dirty}) => {
  const [isToggled, setIsToggled] = useState(false)
  const [errorState, setErrorState] = useState(false)

  const moPlan = Object.values(val.monthlyPlan);
  const moPlanSum = moPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  const yrPlan = Object.values(val.yearlyPlan);
  const yrPlanSum = yrPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  let planTotal = yrPlanSum + moPlanSum;

  console.log(planTotal)

  const ButtonValidation = () => {
    if (planTotal === 0) {
       setErrorState(true)
    } else  {
      setPage((currPage) => currPage + 1)
    }
  }

  console.log(errorState)

  

  return (
    <div className="select-plan">
        <p>You have the option of monthly or yearly billing.</p>
      <div className="select-plan-1">
        {!isToggled ? <MonthlyPlan val={val} setFieldValue={setFieldValue} setErrorState={setErrorState} /> :
        <YearlyPlan val={val} setFieldValue={setFieldValue} setErrorState={setErrorState}/> }
        <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
        <p className={ errorState ? 'plan-err' : 'plan-err-hidden'}>Your are yet to select a plan</p>
      </div>

      <div className="plan-footer">
          <button
          type='button'
          onClick={() => {
              setPage((currPage) => currPage - 1);
          }}
          >
          Go Back
          </button>

          <button
          type='button'
          disabled={errorState}
          onClick={ButtonValidation}
        >
          Next Step
        </button>
     </div>
   </div>
  )
}

export default SelectPlan