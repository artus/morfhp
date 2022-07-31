import * as React from 'react';
import { FormInput } from '../domain/FormInput';
import { useCanSubmit } from '../value-hooks/useCanSubmit';

interface ButtonComponentProps {
  isLoading: boolean,
  canSubmit: boolean,
  onSubmit: () => void | Promise<void>
}

interface SubmitButtonProps {
  inputs?: FormInput<unknown>[];
  onSubmit: () => void | Promise<void>,
  isLoadingInitially?: boolean,
  Component: React.FC<ButtonComponentProps>
}

class SubmitButtonState {
  constructor(
    readonly jsx: JSX.Element,
  ) { }
}

export const useSubmitButton = ({
  inputs = [],
  isLoadingInitially = false,
  onSubmit,
  Component
}: SubmitButtonProps): SubmitButtonState => {

  const [isLoading, setIsLoading] = React.useState(isLoadingInitially);

  const canSubmit = useCanSubmit(inputs);

  const innerSubmit = async () => {
    setIsLoading(true);
    await onSubmit();
    setIsLoading(false);
  }

  const jsx = <Component
    isLoading={isLoading}
    canSubmit={canSubmit}
    onSubmit={innerSubmit}
  />

  return new SubmitButtonState(jsx);
}