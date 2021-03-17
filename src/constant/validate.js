
const validate = values => {
    const errors = {};
    if (values.search.length <= "2") {
      errors.search = 'Required';
    }
  
    return errors;
  };

  export default validate