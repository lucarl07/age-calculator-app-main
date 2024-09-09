// Components:
import FormField from "./FormField";

// Modules:
import calculateAge from "../../helpers/calculateAge";
import { useState } from "react";

const DateForm = () => {
  const [ bday, setBday ] = useState('') // Birthday
  const [ bmonth, setBmonth ] = useState('') // Birth month
  const [ byear, setByear ] = useState('') // Birth year

  if (bday != '' && bmonth != '' && byear != '') {
    calculateAge(byear, bmonth, bday)
  }

  return (
    <form className="date-form">
      <FormField.Root>
        <FormField.Label type="day" />
        <FormField.Input type="day" getter={bday} setter={setBday} />
        <FormField.Error error="" />
      </FormField.Root>
      
      <FormField.Root>
        <FormField.Label type="month" />
        <FormField.Input type="month" getter={bmonth} setter={setBmonth} />
        <FormField.Error error="" />
      </FormField.Root>

      <FormField.Root>
        <FormField.Label type="year" />
        <FormField.Input type="year" getter={byear} setter={setByear} />
        <FormField.Error error="" />
      </FormField.Root>
    </form>
  );
}

export default DateForm;