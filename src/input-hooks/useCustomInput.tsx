import React from 'react';
import { FormInput } from '../domain/FormInput';
import {
  FormInputProps,
  InputComponentProps,
  useFormValue,
} from '../value-hooks/useFormValue';

interface CustomInputComponentProps<T> {
  placeholder?: T;
  defaultValue?: T;
}

interface CustomInputProps<T> {
  placeholder?: T;
  Component: React.FC<InputComponentProps<T> & CustomInputComponentProps<T>>;
}

export function useCustomInput<T>({
  isRequired,
  label,
  validator,
  defaultValue,
  placeholder,
  validateInitially = false,
  emptyValueMessage,
  Component,
}: FormInputProps<T> & CustomInputProps<T>): FormInput<T> {
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
      label={label}
      value={formValue.value}
      placeholder={placeholder}
      error={formValue.error}
      onValueChange={formValue.onChange}
      isError={formValue.isError()}
      touched={formValue.touched}
    />
  );

  return new FormInput(formValue, jsx, formValue.onChange);
}
