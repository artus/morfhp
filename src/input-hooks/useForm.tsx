import * as React from 'react';
import { FormInput } from '../domain/FormInput';
import { useCanSubmit } from '../value-hooks/useCanSubmit';

interface FormProps {
  inputs?: FormInput<any>[];
  onSubmit: () => void | Promise<void>;
  isLoadingInitially?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  onError?: (error: Error) => void | Promise<void>;
}

class FormState {
  constructor(
    readonly canSubmit: boolean,
    readonly isLoading: boolean,
    readonly onSubmit: React.FormEventHandler<HTMLFormElement>,
    readonly error?: Error
  ) {}
}

export const useForm = ({
  inputs = [],
  stopPropagation = false,
  preventDefault = true,
  onSubmit,
  onError = () => {},
}: FormProps): FormState => {
  const canSubmit = useCanSubmit(inputs);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error>();

  const innerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (preventDefault) {
        e.preventDefault();
      }
      if (stopPropagation) {
        e.stopPropagation();
      }
      if (canSubmit) {
        setIsLoading(true);
        await onSubmit();
      }
    } catch (error) {
      setError(error as Error);
      await onError(error as Error);
    }
    setIsLoading(false);
  };

  return new FormState(canSubmit, isLoading, innerSubmit, error);
};
