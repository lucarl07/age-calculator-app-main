import PropTypes from "prop-types";

const Results = ({ children }) => {
  return (
    <section className="results">
      {children}
    </section>
  );
}

Results.propTypes = {
  children: PropTypes.node
}

export default Results