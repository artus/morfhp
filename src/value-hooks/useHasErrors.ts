import { useMemo } from 'react';
import { FormInput } from '../domain/FormInput';

export const useHasErrors = (formInputs: FormInput<unknown>[]): boolean => {
  return useMemo(() => {
    for (const formInput of formInputs) {
      if (formInput.formValue.isError()) {
        return true;
      }
    }
    return false;
  }, [formInputs]);
};
