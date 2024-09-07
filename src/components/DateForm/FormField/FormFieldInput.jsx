import PropTypes from "prop-types";

const FormFieldInput = ({ getter, setter }) => {
  return (
    <input 
      type="number" 
      name="field_input" 
      id="field_input" 
      value={getter}
      onChange={({target}) => setter(target.value)}
    />
  );
}

FormFieldInput.propTypes = {
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired
}

export default FormFieldInput