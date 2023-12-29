import * as React from 'react';
import { constants } from '../../../constants';
import { Loader } from '../loader/Loader';

interface SubmitButtonProps {
  text?: string;
  isLoading: boolean;
  canSubmit: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = 'Submit',
  isLoading,
  canSubmit,
}: SubmitButtonProps) => {
  const disabled = isLoading || !canSubmit;

  return (
    <>
      <button type="submit" style={style(!disabled)}>
        {isLoading ? <Loader /> : text}
      </button>
    </>
  );
};

const style: (enabled: boolean) => React.CSSProperties = (
  enabled: boolean
) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: constants.colors.buttons.primary,
  opacity: enabled ? 1 : 0.5,
  padding: constants.sizing.padding.medium,
  color: constants.colors.white,
  cursor: 'pointer',
  borderRadius: '25px',
  border: 'none',
});
