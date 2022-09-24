import React from 'react';
import { FormInput } from '../domain/FormInput';
import {
  FormInputProps,
  InputComponentProps,
  useFormValue,
} from '../value-hooks/useFormValue';

interface BooleanInputProps {
  Component: React.FC<InputComponentProps<boolean>>;
}

export const useBooleanInput = ({
  isRequired,
  label,
  validator,
  defaultValue = false,
  validateInitially = false,
  emptyValueMessage,
  Component,
}: FormInputProps<boolean> & BooleanInputProps): FormInput<boolean> => {
  const formValue = useFormValue({
    defaultValue,
    validator,
    isRequired,
    validateInitially,
    emptyValueMessage,
  });

  const jsx = (
    <Component
      isError={formValue.isError()}
      isRequired={isRequired}
      label={label}
      onValueChange={formValue.onChange}
      value={formValue.value}
      error={formValue.error}
    />
  );

  return new FormInput(formValue, jsx, formValue.onChange);
};
