import PropTypes from "prop-types"

const ResultFieldPeriod = ({ value }) => {
  return (
    <h1>{value}</h1>
  );
}

ResultFieldPeriod.propTypes = {
  value: PropTypes.string.isRequired
}

export default ResultFieldPeriod;