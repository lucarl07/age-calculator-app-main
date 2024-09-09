import PropTypes from "prop-types"

const ResultFieldNumber = ({ value }) => {
  return (
    <h1>{value || "--"}</h1>
  );
}

ResultFieldNumber.propTypes = {
  value: PropTypes.number
}

export default ResultFieldNumber;