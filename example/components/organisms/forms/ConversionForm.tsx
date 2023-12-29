import * as React from 'react';
import { useNumberInput, useCanSubmit, useForm } from '../../../../.';
import { Form } from '../../atoms/form/Form';
import { NumberInputGroup } from '../../molecules/NumberInputGroup';
import { SubmitButton } from '../../atoms/buttons/SubmitButton';

const priceValidator = (price: number) => {
  if (isNaN(price)) {
    throw new Error('Please enter a valid number.');
  } else if (price <= 0) {
    throw new Error('Please enter a number larger than 0.');
  }
  return price;
};

export const ConversionForm: React.FC = () => {
  const [value, setValue] = React.useState('');

  const priceValue = useNumberInput({
    defaultValue: 1,
    isRequired: true,
    label: 'Price in EUR',
    validator: priceValidator,
    Component: NumberInputGroup,
  });

  const rateValue = useNumberInput({
    defaultValue: 1.47889,
    isRequired: true,
    label: 'Conversion rate',
    validator: priceValidator,
    Component: NumberInputGroup,
  });

  const canSubmit = useCanSubmit([priceValue, rateValue]);

  const form = useForm({
    inputs: [priceValue, rateValue],
    onSubmit,
  });

  async function onSubmit() {
    setValue(
      (priceValue.formValue.value! * rateValue.formValue.value!).toFixed(2)
    );
  }

  return (
    <Form onSubmit={form.onSubmit}>
      {priceValue.jsx}
      {rateValue.jsx}
      <SubmitButton
        canSubmit={canSubmit}
        isLoading={form.isLoading}
        text="Convert"
      />
      {canSubmit && <p>Result:{` ${value}`}</p>}
    </Form>
  );
};
