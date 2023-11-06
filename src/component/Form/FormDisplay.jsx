import React from "react";
import YourInfo from "../YourInfo/YourInfo";
import SelectPlan from "../Plans/SelectPlan";
import AddOns from "../AddsOns/AddOns";
import Summary from "../Summary/Summary";
import './FormDisplay.css';
import { useFormik  } from "formik";
import { basicSchema } from "../../schemas";
import Modal from "../Modal/Modal";





const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const FormDisplay = ({page, setPage}) => {

  const {values, handleBlur, handleChange, errors, touched, handleSubmit, setFieldValue, dirty, isSubmitting} = useFormik ({
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
    // validateOnBlur: '',
    // validateOnChange: '',
    
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
      dirty={dirty}
      errors={errors}
      touched={touched}
      setPage={setPage} 
      page={page}
      onchange={handleChange}
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
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting} />;
    }
  };


  return (
     <form className="form"  onSubmit={handleSubmit} autoComplete="off">
      {isSubmitting ? <Modal/> :
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
      </div>}
    </form>
    
  );
};

export default FormDisplay;
