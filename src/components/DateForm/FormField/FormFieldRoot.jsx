import PropTypes from "prop-types";

const FormFieldRoot = ({ children }) => {
  return (
    <div className="form_field_root">
      {children}
    </div>
  );
}

FormFieldRoot.propTypes = {
  children: PropTypes.node
}

export default FormFieldRoot