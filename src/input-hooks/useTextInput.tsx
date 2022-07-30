import React from "react";
import { FormInput } from "../domain/FormInput";
import { FormInputProps, InputComponentProps, useFormValue } from "../value-hooks/useFormValue";

interface TextInputComponentProps {
  rows?: number,
  secureTextEntry?: boolean
}

interface TextInputProps {
  isMultiline?: boolean;
  rows?: number;
  secureTextEntry?: boolean,
  Component: React.FC<InputComponentProps<string> | TextInputComponentProps>
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
  Component
}: FormInputProps<string> & TextInputProps): FormInput<string> => {

  const formValue = useFormValue({
    defaultValue,
    validator,
    isRequired,
    validateInitially
  });

  const jsx = <Component
    label={label}
    defaultValue={defaultValue}
    value={formValue.value}
    placeholder={placeholder}
    rows={rows}
    error={formValue.error}
    secureTextEntry={secureTextEntry}
    onValueChange={formValue.onChange}
  />;

  return new FormInput(
    formValue,
    jsx,
    formValue.onChange
  );
}