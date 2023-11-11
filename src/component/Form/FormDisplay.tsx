import React from "react";
import YourInfo from "../YourInfo/YourInfo";
import SelectPlan from "../Plans/SelectPlan";
import AddOns from "../AddsOns/AddOns";
import Summary from "../Summary/Summary";
import './FormDisplay.css';
import { useFormik  } from "formik";
import { basicSchema } from "../../schemas";
import ThankYou from "../ThankYou/ThankYou";




  const onSubmit = async ( actions : any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };


const FormDisplay = (props: any) => {
  const {page, setPage} = props

  const {values, handleBlur, handleChange, errors, touched, handleSubmit, setFieldValue, dirty} = useFormik ({
      initialValues: {
      name: '',
      email: '',
      phone: '',
      monthlyPlan: {
        arcade: 0,
        advanced:0,
        pro:0,
      },
      yearlyPlan: {
        arcade: 0,
        advanced:0,
        pro:0,
      },
      monthlyAddOns:{
        onlineService: 0,
        largerStorage: 0,
        customProfile: 0,
      },
      yearlyAddOns:{
        onlineService: 0,
        largerStorage: 0,
        customProfile: 0,
      }
    },
    validationSchema: basicSchema,
    onSubmit,
    
  });
  console.log(values)

 


  const FormTitles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <YourInfo 
      val={values}
      errors={errors}
      touched={touched}
      setPage={setPage} 
      page={page}
      onchange={handleChange}
      handleBlur={handleBlur}
      />;
    } else if (page === 1) {
      return <SelectPlan
       val={values}
       setFieldValue={setFieldValue}
       setPage={setPage}
       page={page}
       dirty={dirty}
      />;
    } else if (page === 2) {
      return <AddOns 
      setFieldValue={setFieldValue}  
      val={values} 
      setPage={setPage} 
      page={page}
      onchange={handleChange}
      />;
    } else if (page === 3) {
      return <Summary 
      val={values} 
      setPage={setPage} 
      page={page}
    />;
    } else if (page === 4) {
      return <ThankYou/>
    }
  };




  return (
     <form className="form"  onSubmit={handleSubmit} autoComplete="off">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
      </div>
    </form>
    
  );
};

export default FormDisplay;
