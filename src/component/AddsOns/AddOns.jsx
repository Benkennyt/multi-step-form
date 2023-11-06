
import './AddOns.css';
import MonthlyAddOns from './MonthlyAddOns';
import YearlyAddOns from './YearlyAddOns';

const AddOns = ({val, setFieldValue, setPage, onchange}) => {


  const moPlan = Object.values(val.monthlyPlan);
  const moPlanSum = moPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  const moAddOns = Object.values(val.monthlyAddOns);
  const moAddOnsSum = moAddOns.reduce((accumulator, currentValue) => accumulator + currentValue);


  

  return (
    <div  className='addons'>
      <div className='addons-2'>
        {moPlanSum > 1 ? <MonthlyAddOns val={val} setFieldValue={setFieldValue}/>  : <YearlyAddOns val={val} setFieldValue={setFieldValue} onchange={onchange}/>}
      </div>

      <div className="addons-footer">
        <button
        type='button'
        onClick={() => {
            setPage((currPage) => currPage - 1);
        }}
        >
        Go Back
        </button>

        <button
        // disabled={yrAddOnsSum + moAddOnsSum === 0}
        type='button'
        onClick={() => {
         setPage((currPage) => currPage + 1)
         }}
       >
         Next Step
       </button>
  </div>
    </div>
  )
}

export default AddOns