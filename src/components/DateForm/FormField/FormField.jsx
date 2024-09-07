const FormField = ({ type, errorMsg, getter, setter }) => {
  return (
    <div>
      <label htmlFor="field_input">
        {type}
      </label>

      <input 
        type="number" 
        name="field_input" 
        id="field_input" 
        value={getter}
        onChange={({target}) => setter(target.value)}
      />

      <span className="error_msg">
        {errorMsg}
      </span>
    </div>
  );
}

FormField.propTypes = {
  type: String.isRequired,
  errorMsg: String,
  getter: Number.isRequired,
  setter: Function.isRequired
}

export default FormField