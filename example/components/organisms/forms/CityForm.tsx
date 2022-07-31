import * as React from "react";
import { SelectInputItem, useSelectInput, useTextInput, useSubmitButton } from "../../../../dist";
import { onSubmitWrapper } from "../../../helpers/OnSubmitWrapper";
import { SubmitButton } from "../../atoms/buttons/SubmitButton";
import { Form } from "../../atoms/form/Form";
import { SelectInputGroup } from "../../molecules/SelectInputGroup";
import { TextInputGroup } from "../../molecules/TextInputGroup";

export const CityForm: React.FC = () => {

  const cities = [
    new SelectInputItem<string>('New York', 'New York'),
    new SelectInputItem<string>('London', 'London'),
    new SelectInputItem<string>('Tokyo', 'Tokyo'),
    new SelectInputItem<string>('New Delhi', 'New Delhi'),
    new SelectInputItem<string>('Brussels', 'Brussels'),
  ]

  const postalCodeInput = useTextInput({
    isRequired: true,
    label: 'Postal code',
    Component: TextInputGroup,
    validator: (postalCode: string) => postalCode
  });

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

  const submitButton = useSubmitButton({
    inputs: [
      postalCodeInput,
      cityInput
    ],
    onSubmit,
    Component: SubmitButton({ text: "Log in" })
  });

  function onSubmit(): Promise<void> {
    return onSubmitWrapper(() => {
      alert(`Have fun in ${cityInput.formValue.value.value}`);
    });
  }

  return <Form>
    {postalCodeInput.jsx}
    {cityInput.jsx}
    {submitButton.jsx}
  </Form>

}