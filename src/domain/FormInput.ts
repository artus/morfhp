import { FormValueState } from './FormValueState';

export class FormInput<T> {
  constructor(
    readonly formValue: FormValueState<T>,
    readonly jsx: JSX.Element,
    readonly onChange: (value: T) => void
  ) {}
}
