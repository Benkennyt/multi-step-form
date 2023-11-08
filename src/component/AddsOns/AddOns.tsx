
import './AddOns.css';
import MonthlyAddOns from './MonthlyAddOns';
import YearlyAddOns from './YearlyAddOns';

const AddOns = (props:any) => {
  const {val, setFieldValue, setPage, onchange} = props


  const moPlan = Object.values<number>(val.monthlyPlan);
  const moPlanSum : any = moPlan.reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <div  className='addons'>
      <div className='addons-2'>
        {moPlanSum > 1 ? <MonthlyAddOns val={val} setFieldValue={setFieldValue}/>  : <YearlyAddOns val={val} setFieldValue={setFieldValue} onchange={onchange}/>}
      </div>

      <div className="addons-footer">
        <button
        type='button'
        onClick={() => {
            setPage((currPage: number ) => currPage - 1);
        }}
        >
        Go Back
        </button>

        <button
        type='button'
        onClick={() => {
         setPage((currPage: number) => currPage + 1)
         }}
       >
         Next Step
       </button>
  </div>
    </div>
  )
}

export default AddOns