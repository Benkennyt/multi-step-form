import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import Switch from "./Switch";
import { useState } from "react";
import './SelectPlan.css';


const SelectPlan = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
   <div className="select-plan">
    <p>You have the option of monthly or yearly billing.</p>
    {!isToggled ? <MonthlyPlan/> :
    <YearlyPlan/> }
    <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
   </div>
  )
}

export default SelectPlan