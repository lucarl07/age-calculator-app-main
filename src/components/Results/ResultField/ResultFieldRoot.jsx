import PropTypes from "prop-types"

const ResultFieldRoot = ({ children }) => {
  return (
    <span className="result_field">
      {children}
    </span>
  );
}

ResultFieldRoot.propTypes = {
  children: PropTypes.node
}

export default ResultFieldRoot;