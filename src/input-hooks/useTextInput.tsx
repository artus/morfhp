import React from 'react';
import { FormInput } from '../domain/FormInput';
import {
  FormInputProps,
  InputComponentProps,
  useFormValue,
} from '../value-hooks/useFormValue';

interface TextInputComponentProps {
  rows?: number;
  secureTextEntry?: boolean;
  placeholder?: string;
}

interface TextInputProps {
  placeholder?: string;
  isMultiline?: boolean;
  rows?: number;
  secureTextEntry?: boolean;
  Component: React.FC<InputComponentProps<string> & TextInputComponentProps>;
}

export const useTextInput = ({
  isRequired,
  label,
  validator,
  defaultValue = '',
  placeholder = '',
  rows = 1,
  validateInitially = false,
  secureTextEntry = false,
  emptyValueMessage,
  Component,
}: FormInputProps<string> & TextInputProps): FormInput<string> => {
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
      rows={rows}
      error={formValue.error}
      secureTextEntry={secureTextEntry}
      onValueChange={formValue.onChange}
      isError={formValue.isError()}
      touched={formValue.touched}
    />
  );

  return new FormInput(formValue, jsx, formValue.onChange);
};
