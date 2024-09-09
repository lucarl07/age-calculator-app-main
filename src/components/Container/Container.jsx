import DateForm from "../DateForm/DateForm";
import Results from "../Results/Results";
import Separator from "../Separator/Separator";
import styles from "./Container.module.css"

const Container = () => {
  return (
    <section className={styles.container}>
      {/* Birth Date Formulary */}
      <DateForm /> 
      {/* Section Separator */}
      <Separator /> 
      {/* Resulting Age */}
      <Results /> 
    </section>
  );
}

export default Container;