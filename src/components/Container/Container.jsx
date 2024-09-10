// Components:
import DateForm from "../DateForm/DateForm";
import FormField from "../DateForm/FormField";
import Separator from "../Separator/Separator";
import Results from "../Results/Results";
import ResultField from "../Results/ResultField";

// Modules:
import calculateAge from "../../helpers/calculateAge";
import { useState } from "react";

// Stylesheets:
import styles from "./Container.module.css"

const Container = () => {
  const [ bday, setBday ] = useState('') // Birthday
  const [ bmonth, setBmonth ] = useState('') // Birth month
  const [ byear, setByear ] = useState('') // Birth year
  const timePeriods = []

  if (bday != '' && bmonth != '' && byear != '') {
    const age = calculateAge(byear, bmonth, bday)

    timePeriods.push(
      age.years(), 
      age.months(),
      age.days()
    )
  }

  return (
    <main className={styles.container}>
      {/* Birth Date Formulary */}
      <DateForm>
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
      </DateForm>
      {/* Section Separator */}
      <Separator /> 
      {/* Resulting Age */}
      <Results>
        <ResultField.Root>
          <ResultField.Number value={timePeriods[0] || null} />
          <ResultField.Period value="years" />
        </ResultField.Root>
        
        <ResultField.Root>
          <ResultField.Number value={timePeriods[1] || null} />
          <ResultField.Period value="months" />
        </ResultField.Root>

        <ResultField.Root>
          <ResultField.Number value={timePeriods[2] || null} />
          <ResultField.Period value="days" />
        </ResultField.Root>
      </Results>
    </main>
  );
}

export default Container;