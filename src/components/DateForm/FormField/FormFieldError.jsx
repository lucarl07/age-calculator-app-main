import PropTypes from "prop-types";

const FormFieldError = ({ error }) => {
  return (
    <span className="form_field_error">
      {error}
    </span>
  );
}

FormFieldError.propTypes = {
  error: PropTypes.string
}

export default FormFieldError;