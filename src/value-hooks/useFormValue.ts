import { useEffect, useMemo, useState } from "react";
import { FormValueState } from "../domain/FormValueState";
import { validate } from "../domain/Validation";

export interface FormInputProps<T> {
  isRequired: boolean;
  label: string;
  validator: (value: T) => T;
  defaultValue?: T;
  placeholder?: string;
  validateInitially?: boolean;
}

export interface InputComponentProps<T> {
  label: string,
  value: T | undefined,
  onValueChange: (newValue: T) => void,
  placeholder?: string,
  isRequired: boolean,
  defaultValue?: T,
  error?: string
}

interface FormValueProps<T> {
  defaultValue?: T;
  validator: (value: T) => T;
  isRequired: boolean;
  validateInitially?: boolean;
  emptyValueMessage?: string
}

export const useFormValue = <T>({
  defaultValue,
  validator,
  isRequired,
  validateInitially = false,
  emptyValueMessage = "Please enter a value."
}: FormValueProps<T>): FormValueState<T> => {

  const [value, setValue] = useState<T | undefined>(defaultValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const actualValue = useMemo(() => {
    if (touched) {
      return value;
    } else {
      return defaultValue;
    }
  }, [touched, value, defaultValue]);

  useEffect(() => {
    if (validateInitially && value !== undefined && value !== null) {
      setTouched(true);
      validate(value, validator, setError);
    }
  }, []);

  useEffect(() => {
    if (touched && !value && isRequired) {
      setError(emptyValueMessage);
    } else if (touched && value) {
      validate(value, validator, setError);
    }
  }, [touched, isRequired, validator, value]);

  const onChange = (value: T): void => {
    setTouched(true);
    setValue(value);
  }

  const clear = () => {
    setTouched(true);
    setValue(undefined);
  }

  return new FormValueState(isRequired, actualValue, onChange, error, touched, clear);
}