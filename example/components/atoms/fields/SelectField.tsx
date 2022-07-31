import * as React from 'react';
import { SelectInputItem } from '../../../../dist'
import { constants } from '../../../constants';

interface SelectFieldProps<T> {
  items: SelectInputItem<T>[],
  onValueChange: (newValue: SelectInputItem<T>) => void,
  value?: SelectInputItem<T>,
}

export const SelectField: React.FC<SelectFieldProps<string>> = ({
  items,
  onValueChange,
  value,
}) => {

  const [selectedValue, setSelectedValue] = React.useState(value?.name);

  React.useEffect(() => {
    if (selectedValue) {
      const selectedItem = items.find(item => item.name === selectedValue);
      onValueChange(selectedItem!);
    }
  }, [selectedValue]);

  return <select
    style={style}
    value={value.name}
    onChange={(e) => {
      const index = e.target.selectedIndex;
      const selectedItem = items[index];
      console.log("select", selectedItem);
      onValueChange(selectedItem);
    }}
  >
    {
      items.map((item, index) => <option
        key={index}
        value={item.name}
      >
        {item.name}
      </option>)
    }
  </select>
}

const style: React.CSSProperties = {
  width: "100%",
  marginBottom: constants.sizing.margin.small,
  marginTop: constants.sizing.margin.small,
  padding: constants.sizing.padding.small,
  borderRadius: "5px"
}