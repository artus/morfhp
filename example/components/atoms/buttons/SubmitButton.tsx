import * as React from 'react';
import { constants } from '../../../constants';
import { Loader } from '../loader/Loader';

interface SubmitButtonFactoryProps {
  text?: string;
}

interface SubmitButtonProps {
  isLoading: boolean;
  canSubmit: boolean;
  onSubmit: () => void | Promise<void>;
}

export const SubmitButton: (
  props: SubmitButtonFactoryProps
) => React.FC<SubmitButtonProps> = ({ text }: SubmitButtonFactoryProps) => {
  return ({ isLoading, canSubmit, onSubmit }: SubmitButtonProps) => {
    const disabled = isLoading || !canSubmit;

    return (
      <div
        style={style(!disabled)}
        onClick={() => {
          if (!disabled) {
            onSubmit();
          }
        }}
      >
        {isLoading ? <Loader /> : text}
      </div>
    );
  };
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
});
