export const USER_FORM = `
const usernameValidator = (username: string) => {
  if (username.length < 3) throw new Error('Username must at least be 3 characters long.');
  if (username.length > 16) throw new Error('Username can not be longer then 16 characters.');

  return username;
}

const passwordValidator = (password: string) => {
  if (password.length < 3) throw new Error('Password must at least be 3 characters long.');
  if (password.length > 16) throw new Error('Password can not be longer then 16 characters.');

  return password;
}

export const UserForm: React.FC = () => {

  const usernameInput = useTextInput({
    isRequired: true,
    label: "username",
    validator: usernameValidator,
    Component: TextInputGroup
  });

  const passwordInput = useTextInput({
    secureTextEntry: true,
    isRequired: true,
    label: "password",
    validator: passwordValidator,
    Component: TextInputGroup
  });

  const submitButton = useSubmitButton({
    inputs: [usernameInput, passwordInput],
    onSubmit,
    Component: SubmitButton({ text: "Create user" })
  });

  function onSubmit(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert(\`Welcome new user \${usernameInput.formValue.value!}\`);
        setTimeout(resolve, 500);
      }, 0)
    });
  }

  return <Form>
    {usernameInput.jsx}
    {passwordInput.jsx}
    {submitButton.jsx}
  </Form>
}
`;

export const CHECKBOX = `
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
`;

export const SELECT = `
const cities = [
  new SelectInputItem<string>('New York', SOME_DOMAIN_OBJECT),
  new SelectInputItem<string>('London', SOME_DOMAIN_OBJECT),
  // ...
];

const cityInput = useSelectInput({
  isRequired: true,
  label: 'City',
  Component: SelectInputGroup,
  defaultValue: cities[0],
  items: cities,
  validator: (selectedInput: SelectInputItem<string>) => {
    if (selectedInput.name === 'Brussels') {
      throw new Error("Brussels can not be selected.");
    }
    return selectedInput;
  }
});
`;
