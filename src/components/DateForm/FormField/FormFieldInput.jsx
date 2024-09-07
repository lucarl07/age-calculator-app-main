import PropTypes from "prop-types";
import helpers from "../../../helpers/DateForm";

const FormFieldInput = ({ type, getter, setter }) => {
  const setPlaceholder = helpers.setPlaceholder(type)

  return (
    <input 
      type="number" 
      name="field_input" 
      id="field_input" 
      placeholder={setPlaceholder}
      value={getter}
      onChange={({target}) => setter(target.value)}
    />
  );
}

FormFieldInput.propTypes = {
  type: PropTypes.string,
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired
}

export default FormFieldInput