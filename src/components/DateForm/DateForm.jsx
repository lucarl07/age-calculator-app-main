// Components:
import { calculateAge } from "../../helpers/DateForm/getAge";
import FormField from "./FormField";

// Modules:
import { useEffect, useState } from "react";

const DateForm = () => {
  const [ bday, setBday ] = useState('') // Birthday
  const [ bmonth, setBmonth ] = useState('') // Birth month
  const [ byear, setByear ] = useState('') // Birth year

  useEffect(() => {
    calculateAge(byear, bmonth, bday)
  }, [bday, bmonth, byear])

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