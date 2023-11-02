import { useState } from "react";
import YourInfo from "../YourInfo/YourInfo";
import SelectPlan from "../Plans/SelectPlan";
import AddOns from "../AddsOns/AddOns";
import Summary from "../Summary";
import './Form.css'

const Form = ({page}) => {

  const FormTitles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <YourInfo />;
    } else if (page === 1) {
      return <SelectPlan />;
    } else if (page === 2) {
      return <AddOns />;
    } else if (page === 3) {
      return <Summary />;
    }
  };
  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="form-body">{PageDisplay()}</div>
      </div>
    </div>
  );
};

export default Form;
