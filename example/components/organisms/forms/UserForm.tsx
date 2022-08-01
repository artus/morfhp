import * as React from 'react';

import { TextInputGroup } from '../../molecules/TextInputGroup';
import { useTextInput, useSubmitButton } from '../../../../.';
import { SubmitButton } from '../../atoms/buttons/SubmitButton';
import { Form } from '../../atoms/form/Form';
import { onSubmitWrapper } from '../../../helpers/OnSubmitWrapper';

const usernameValidator = (username: string) => {
  if (username.length < 3)
    throw new Error('Username must at least be 3 characters long.');
  if (username.length > 16)
    throw new Error('Username can not be longer then 16 characters.');

  return username;
};

const passwordValidator = (password: string) => {
  if (password.length < 3)
    throw new Error('Password must at least be 3 characters long.');
  if (password.length > 16)
    throw new Error('Password can not be longer then 16 characters.');

  return password;
};

export const UserForm: React.FC = () => {
  const usernameInput = useTextInput({
    isRequired: true,
    label: 'username',
    validator: usernameValidator,
    Component: TextInputGroup,
  });

  const passwordInput = useTextInput({
    secureTextEntry: true,
    isRequired: true,
    label: 'password',
    validator: passwordValidator,
    Component: TextInputGroup,
  });

  const submitButton = useSubmitButton({
    inputs: [usernameInput, passwordInput],
    onSubmit,
    Component: SubmitButton({ text: 'Create user' }),
  });

  function onSubmit(): Promise<void> {
    return onSubmitWrapper(() => {
      alert(`Welcome new user ${usernameInput.formValue.value!}`);
    });
  }

  return (
    <Form>
      {usernameInput.jsx}
      {passwordInput.jsx}
      {submitButton.jsx}
    </Form>
  );
};
