// Stylesheets:
import styles from "./DateForm.module.css"

// Components:
import FormField from "./FormField/FormField";

// Modules:
import { useState } from "react";

const DateForm = () => {
  const [ bday, setBday ] = useState(null) // Birthday
  const [ bmonth, setBmonth ] = useState(null) // Birth month
  const [ byear, setByear ] = useState(null) // Birth year

  return (
    <>
      <FormField 
        type="day" 
        errorMsg="Please remove me afterwards."
        getter={bday}
        setter={setBday} 
      />
      <FormField 
        type="month" 
        errorMsg="Please remove me afterwards."
        getter={bmonth}
        setter={setBmonth} 
      />
      <FormField 
        type="year" 
        errorMsg="Please remove me afterwards."
        getter={byear}
        setter={setByear} 
      />
    </>
  );
}

export default DateForm;