import * as React from 'react';
import { FormInput } from '../domain/FormInput';
import { FormInputProps, InputComponentProps, useFormValue } from '../value-hooks/useFormValue';

export class SelectInputItem<T> {
  constructor(
    readonly name: string,
    readonly value: T,
  ) {}
}

interface SelectInputComponentProps<T> {
  items: SelectInputItem<T>[],
  selectedItem?: SelectInputItem<T>
}

interface SelectInputProps<T> {
  items: SelectInputItem<T>[];
  defaultValue: SelectInputItem<T>;
  Component: React.FC<InputComponentProps<SelectInputItem<T>> & SelectInputComponentProps<T>>
}

export function useSelectInput<T>({
  isRequired,
  label,
  validator,
  defaultValue,
  items,
  validateInitially = false,
  Component,
  emptyValueMessage
}: FormInputProps<SelectInputItem<T>> & SelectInputProps<T>): FormInput<SelectInputItem<T>> {

  const formValue = useFormValue<SelectInputItem<T>>({
    validator,
    isRequired,
    defaultValue,
    validateInitially,
    emptyValueMessage
  });

  const jsx = <Component
    isError={formValue.isError()}
    isRequired={isRequired}
    items={items}
    label={label}
    onValueChange={formValue.onChange}
    value={formValue.value}
    error={formValue.error}
  />

  return new FormInput(
    formValue,
    jsx,
    formValue.onChange
  );
}