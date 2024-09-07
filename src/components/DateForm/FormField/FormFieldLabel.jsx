import PropTypes from "prop-types";

const FormFieldLabel = ({type}) => {
  return (
    <label className="form_field_label" htmlFor="field_input">
      {type}
    </label>
  );
}

FormFieldLabel.propTypes = {
  type: PropTypes.string.isRequired
}

export default FormFieldLabel