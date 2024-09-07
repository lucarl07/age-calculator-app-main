import DateForm from "../DateForm/DateForm";
import styles from "./Container.module.css"

const Container = () => {
  return (
    <section className={styles.container}>
      {/* Top - Birth Date Formulary */}
      <DateForm />

      {/* Middle - Section Separator */}
      
      {/* Bottom - Resulting Age */}
    </section>
  );
}

export default Container;