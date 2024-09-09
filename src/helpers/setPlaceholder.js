const setPlaceholder = (inputType) => {
  let placeholder = '';

  switch (inputType) {
    case 'day':
      placeholder = 'DD'
      break;
    case 'month':
      placeholder = 'MM'
      break;
    case 'year':
      placeholder = 'YYYY'
      break;
    default:
      throw new Error("Invalid input type passed at FormFieldInput.")
  }

  return placeholder
}

export default setPlaceholder