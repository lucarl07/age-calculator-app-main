import ResultField from "./ResultField";

const Results = () => {
  return (
    <section className="results">
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
    </section>
  );
}

export default Results