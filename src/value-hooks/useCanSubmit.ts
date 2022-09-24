import { useMemo } from 'react';
import { FormInput } from '../domain/FormInput';

export const useCanSubmit = (formInputs: FormInput<unknown>[]): boolean => {
  return useMemo(() => {
    for (const formInput of formInputs) {
      if (!formInput.formValue.canSubmit()) {
        return false;
      }
    }
    return true;
  }, [formInputs]);
};
