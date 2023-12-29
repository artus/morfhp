import * as React from 'react';

import { TextInputGroup } from '../../molecules/TextInputGroup';
import { useTextInput, useBooleanInput, useForm } from '../../../../.';
import { Form } from '../../atoms/form/Form';
import { CheckboxInputGroup } from '../../molecules/CheckboxInputGroup';
import { onSubmitWrapper } from '../../../helpers/OnSubmitWrapper';
import { SubmitButton } from '../../atoms/buttons/SubmitButton';
import { constants } from '../../../constants';

export const LoginForm: React.FC = () => {
  const usernameInput = useTextInput({
    isRequired: true,
    label: 'username',
    validator: (username: string) => {
      if (username.length < 3)
        throw new Error('Username must at least be 3 characters long.');
      if (username.length > 16)
        throw new Error('Username can not be longer then 16 characters.');
      return username;
    },
    Component: TextInputGroup,
  });

  const passwordInput = useTextInput({
    secureTextEntry: true,
    isRequired: true,
    label: 'password',
    validator: (password: string) => {
      if (password.length < 3)
        throw new Error('Password must at least be 3 characters long.');
      if (password.length > 16)
        throw new Error('Password can not be longer then 16 characters.');
      return password;
    },
    Component: TextInputGroup,
  });

  const rememberInput = useBooleanInput({
    isRequired: false,
    label: 'Remember me',
    validator: (value: boolean) => value,
    defaultValue: false,
    Component: CheckboxInputGroup,
  });

  const tcInput = useBooleanInput({
    isRequired: true,
    label: 'I agree to the terms and conditions',
    validator: (agree: boolean) => {
      if (!agree) {
        throw new Error(
          'You have to accept the terms and conditions to continue'
        );
      }
      return agree;
    },
    emptyValueMessage:
      'You have to accept the terms and conditions to continue',
    defaultValue: false,
    Component: CheckboxInputGroup,
  });

  const form = useForm({
    inputs: [usernameInput, passwordInput, rememberInput, tcInput],
    onSubmit,
  });

  function onSubmit(): Promise<void> {
    return onSubmitWrapper(() => {
      if (rememberInput.formValue.value) {
        alert(`Will remembering ${usernameInput.formValue.value!} after login`);
      } else {
        alert(
          `Will not remember ${usernameInput.formValue.value!} after login`
        );
      }
    });
  }

  return (
    <Form onSubmit={form.onSubmit}>
      {form.error && <p style={style}>{form.error?.message}</p>}
      {usernameInput.jsx}
      {passwordInput.jsx}
      {rememberInput.jsx}
      {tcInput.jsx}
      <SubmitButton canSubmit={form.canSubmit} isLoading={form.isLoading} />
    </Form>
  );
};

const style: React.CSSProperties = {
  color: constants.colors.red,
  fontSize: constants.sizing.fonts.error,
};
