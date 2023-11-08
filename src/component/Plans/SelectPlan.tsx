import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import Switch from "./Switch";
import { useState } from "react";
import './SelectPlan.css';

interface Props {
  val: any, 
  setFieldValue: any, 
  setPage: any, 
  page: number,
  dirty: any
}
const SelectPlan = (props: Props) => {

  const {val, setFieldValue, setPage, page,dirty} = props
  const [isToggled, setIsToggled] = useState(false)
  const [errorState, setErrorState] = useState(false)

  const moPlan = Object.values<number>(val.monthlyPlan);
  const moPlanSum = moPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  const yrPlan = Object.values<number>(val.yearlyPlan);
  const yrPlanSum = yrPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  let planTotal = yrPlanSum + moPlanSum;

  console.log(planTotal)

  const ButtonValidation = () => {
    if (planTotal === 0) {
       setErrorState(true)
    } else  {
      setPage((currPage: number) => currPage + 1)
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
              setPage((currPage:number) => currPage - 1);
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