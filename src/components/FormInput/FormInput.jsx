import styles from './FormInput.module.scss';
import { useEffect } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { callValidation } from '../../utils/validation';

const FormInput = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      searchCall: '',
    },
  });

  const { errors, isValid } = useFormState({ control });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    reset({
      searchCall: '',
    });
  }, [isSubmitSuccessful]);

  return (
    <form className={styles.container__form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchCall"
        control={control}
        rules={callValidation}
        render={({ field }) => (
          <input
            className={styles.container__form_input}
            id="searchCall"
            name="searchCall"
            type="text"
            onChange={(event) => field.onChange(event)}
            value={field.value}
            placeholder="Where do you want to call?"
            errors={errors.searchCall?.message}
          />
        )}
      />
      {errors && <p className={styles.container__form_errors}>{errors?.searchCall?.message}</p>}
      <button
        type="submit"
        disabled={!isValid}
        className={styles.container__form_button}
      >
      </button>
    </form>
  );
};

export default FormInput;
