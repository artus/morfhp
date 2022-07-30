import * as React from "react";

import { TextInputGroup } from "../molecules/TextInputGroup";
import { useTextInput } from '../../../.';
import { constants } from "../../constants";

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
    validateInitially: true,
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
  })

  return <div style={style}>
    {usernameInput.jsx}
    {passwordInput.jsx}
  </div>
}

const style: React.CSSProperties = {
  margin: constants.sizing.margin.medium,
  padding: constants.sizing.padding.large,
  width: "250px",
  boxShadow: '1px 2px 9px gray',
  borderRadius: "15px"
}