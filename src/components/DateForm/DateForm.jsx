// Stylesheets:
import styles from "./DateForm.module.css"

// Components:
import FormField from "./FormField";

// Modules:
import { useState } from "react";

const DateForm = () => {
  const [ bday, setBday ] = useState('') // Birthday
  const [ bmonth, setBmonth ] = useState('') // Birth month
  const [ byear, setByear ] = useState('') // Birth year

  return (
    <form className="date-form">
      <FormField.Root>
        <FormField.Label type="day" />
        <FormField.Input type="day" getter={bday} setter={setBday} />
        <FormField.Error error="Please delete me afterwards." />
      </FormField.Root>
      
      <FormField.Root>
        <FormField.Label type="month" />
        <FormField.Input type="month" getter={bmonth} setter={setBmonth} />
        <FormField.Error error="Please delete me afterwards." />
      </FormField.Root>

      <FormField.Root>
        <FormField.Label type="year" />
        <FormField.Input type="year" getter={byear} setter={setByear} />
        <FormField.Error error="Please delete me afterwards." />
      </FormField.Root>
    </form>
  );
}

export default DateForm;