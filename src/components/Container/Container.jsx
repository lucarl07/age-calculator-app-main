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

  if (bday != '' && bmonth != '' && byear != '') {
    calculateAge(byear, bmonth, bday)
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
          <ResultField.Number />
          <ResultField.Period value="years" />
        </ResultField.Root>
        
        <ResultField.Root>
          <ResultField.Number />
          <ResultField.Period value="months" />
        </ResultField.Root>

        <ResultField.Root>
          <ResultField.Number />
          <ResultField.Period value="days" />
        </ResultField.Root>
      </Results>
    </main>
  );
}

export default Container;