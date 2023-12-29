import { useEffect, useMemo, useState } from 'react';
import { FormValueState } from '../domain/FormValueState';
import { validate } from '../domain/Validation';

export interface FormInputProps<T> {
  isRequired: boolean;
  label: string;
  validator: (value: T | undefined) => T;
  defaultValue?: T;
  validateInitially?: boolean;
  emptyValueMessage?: string;
}

export interface InputComponentProps<T> {
  label: string;
  value: T | undefined;
  onValueChange: (newValue: T) => void;
  isRequired: boolean;
  error?: string;
  isError: boolean;
  touched: boolean;
}

interface FormValueProps<T> {
  defaultValue?: T;
  validator: (value: T | undefined) => T;
  isRequired: boolean;
  validateInitially?: boolean;
  emptyValueMessage?: string;
}

export const useFormValue = <T>({
  defaultValue,
  validator,
  isRequired,
  validateInitially = false,
  emptyValueMessage = 'Please enter a value.',
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
    } else {
      validate(value, validator, setError);
    }
  }, [validateInitially, validator, value]);

  useEffect(() => {
    if (touched && !value && isRequired) {
      setError(emptyValueMessage);
    } else if (touched && value) {
      validate(value, validator, setError);
    }
  }, [touched, isRequired, validator, value, emptyValueMessage]);

  const onChange = (value: T): void => {
    setTouched(true);
    setValue(value);
  };

  const clear = () => {
    setTouched(true);
    setValue(undefined);
  };

  return new FormValueState(
    isRequired,
    actualValue,
    onChange,
    error,
    touched,
    clear
  );
};
