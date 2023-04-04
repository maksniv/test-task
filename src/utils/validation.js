const REQUIRED_FIELD = 'Required to fill';

export const callValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[^!@#$%^&*]{4,12}$/)) {
      return true;
    }

    return 'Please enter between 4 and 8 characters without symbols !@#$%^&*()';
  },
};