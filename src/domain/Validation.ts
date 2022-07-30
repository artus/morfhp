export const validate = <T>(
  value: T,
  validator: (value: T) => T,
  setError: (errorMessage: string) => void
): void => {
  try {
    validator(value);
    setError('');
  } catch (error) {
    setError((error as Error).message);
  }
}