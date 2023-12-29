import * as React from 'react';
import {
  SelectInputItem,
  useSelectInput,
  useTextInput,
  useForm,
} from '../../../../dist';
import { Form } from '../../atoms/form/Form';
import { SelectInputGroup } from '../../molecules/SelectInputGroup';
import { TextInputGroup } from '../../molecules/TextInputGroup';
import { SubmitButton } from '../../atoms/buttons/SubmitButton';
import { constants } from '../../../constants';

export const CityForm: React.FC = () => {
  const cities = [
    new SelectInputItem<string>('New York', 'New York'),
    new SelectInputItem<string>('London', 'London'),
    new SelectInputItem<string>('Tokyo', 'Tokyo'),
    new SelectInputItem<string>('New Delhi', 'New Delhi'),
    new SelectInputItem<string>('Brussels', 'Brussels'),
  ];

  const postalCodeInput = useTextInput({
    isRequired: true,
    label: 'Postal code',
    Component: TextInputGroup,
    validator: (postalCode: string) => postalCode,
  });

  const cityInput = useSelectInput({
    isRequired: true,
    label: 'City',
    Component: SelectInputGroup,
    defaultValue: cities[0],
    items: cities,
    validator: (selectedInput: SelectInputItem<string>) => {
      if (selectedInput.name === 'Brussels') {
        throw new Error('Brussels can not be selected.');
      }
      return selectedInput;
    },
  });

  const form = useForm({
    inputs: [postalCodeInput, cityInput],
    onSubmit,
    onError,
  });

  async function onError(error: Error): Promise<void> {
    alert(error.message);
  }

  async function onSubmit(): Promise<void> {
    if (cityInput.formValue.value?.value === 'Tokyo') {
      throw new Error('Tokyo can not be selected.');
    } else {
      alert(`Have fun in ${cityInput.formValue.value?.value}!`);
    }
  }

  return (
    <Form onSubmit={form.onSubmit}>
      {form.error && <p style={style}>{form.error?.message}</p>}
      {postalCodeInput.jsx}
      {cityInput.jsx}
      <SubmitButton canSubmit={form.canSubmit} isLoading={form.isLoading} />
    </Form>
  );
};

const style: React.CSSProperties = {
  color: constants.colors.red,
  fontSize: constants.sizing.fonts.error,
};
