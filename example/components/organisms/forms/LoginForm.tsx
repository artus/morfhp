import * as React from "react";

import { TextInputGroup } from "../../molecules/TextInputGroup";
import { useTextInput, useSubmitButton, useBooleanInput } from '../../../../.';
import { SubmitButton } from "../../atoms/buttons/SubmitButton";
import { Form } from "../../atoms/form/Form";
import { CheckboxInputGroup } from "../../molecules/CheckboxInputGroup";
import { onSubmitWrapper } from "../../../helpers/OnSubmitWrapper";

export const LoginForm: React.FC = () => {

  const usernameInput = useTextInput({
    isRequired: true,
    label: "username",
    validator: (username: string) => username,
    Component: TextInputGroup
  });

  const passwordInput = useTextInput({
    secureTextEntry: true,
    isRequired: true,
    label: "password",
    validator: (password: string) => password,
    Component: TextInputGroup
  });

  const rememberInput = useBooleanInput({
    isRequired: false,
    label: "Remember me",
    validator: (value: boolean) => value,
    defaultValue: false,
    Component: CheckboxInputGroup
  });

  const tcInput = useBooleanInput({
    isRequired: true,
    label: "I agree to the terms and conditions",
    validator: (agree: boolean) => {
      if (!agree) {
        throw new Error("You have to accept the terms and conditions to continue");
      }
      return agree
    },
    emptyValueMessage: "You have to accept the terms and conditions to continue",
    defaultValue: false,
    Component: CheckboxInputGroup
  });

  const submitButton = useSubmitButton({
    inputs: [
      usernameInput,
      passwordInput,
      rememberInput,
      tcInput
    ],
    onSubmit,
    Component: SubmitButton({ text: "Log in" })
  });

  function onSubmit(): Promise<void> {
    return onSubmitWrapper(() => {
      if (rememberInput.formValue.value) {
        alert(`Will remembering ${usernameInput.formValue.value!} after login`);
      } else {
        alert(`Will not remember ${usernameInput.formValue.value!} after login`);
      }
    })
  }

  return <Form>
    {usernameInput.jsx}
    {passwordInput.jsx}
    {rememberInput.jsx}
    {tcInput.jsx}
    {submitButton.jsx}
  </Form>
}