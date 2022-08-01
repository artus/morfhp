import React from 'react';
import { FormInput } from '../domain/FormInput';
import {
  FormInputProps,
  InputComponentProps,
  useFormValue,
} from '../value-hooks/useFormValue';

interface NumberInputComponentProps {
  placeholder?: string;
}

interface NumberInputProps {
  placeholder?: string;
  Component: React.FC<InputComponentProps<number> & NumberInputComponentProps>;
}

export const useNumberInput = ({
  isRequired,
  label,
  validator,
  defaultValue = 0,
  placeholder = '',
  validateInitially = false,
  emptyValueMessage,
  Component,
}: FormInputProps<number> & NumberInputProps): FormInput<number> => {
  const formValue = useFormValue({
    defaultValue,
    validator,
    isRequired,
    validateInitially,
    emptyValueMessage,
  });

  const jsx = (
    <Component
      isRequired={isRequired}
      isError={formValue.isError()}
      label={label}
      onValueChange={formValue.onChange}
      value={formValue.value}
      error={formValue.error}
      placeholder={placeholder}
    />
  );

  return new FormInput(formValue, jsx, formValue.onChange);
};
