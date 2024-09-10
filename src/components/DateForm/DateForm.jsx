// Dependencies:
import PropTypes from "prop-types";

const DateForm = ({ children }) => {
  return (
    <form className="date-form">
      {children}
    </form>
  );
}

DateForm.propTypes = {
  children: PropTypes.node
}

export default DateForm;