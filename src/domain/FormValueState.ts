export class FormValueState<T> {
  constructor(
    readonly isRequired: boolean,
    readonly value: T | undefined,
    readonly onChange: (value: T) => void,
    readonly error: string,
    readonly touched: boolean,
    readonly clear: () => void
  ) { }

  public isPresent(): boolean {
    return !!this.value;
  }

  public isError(): boolean {
    return this.touched && !!this.error;
  }

  public isSuccess(): boolean {
    return this.touched && !this.error;
  }

  public canSubmit(): boolean {
    return !this.error;
  }
}