import * as React from 'react';
import {
  ControlAutocomplete,
  OptionEntity,
} from '../components/ControlAutocomplete';
import { ControlAutocompleteViewModel } from '../view-models/ControlAutocompleteViewModel';
import { observer } from 'mobx-react-lite';

type Props = {
  vm: ControlAutocompleteViewModel;
  maxOptionsDisplay?: number;
};

export const ControlAutocompleteView = observer(
  ({ vm, maxOptionsDisplay }: Props): React.ReactElement => {
    const options = React.useMemo<OptionEntity[] | null>(
      () =>
        vm.countries?.map((country) => ({
          title: country.fullName,
          subtitle: country.name,
          image: <img width={50} height={50} src={country.flag} />,
        })) ?? null,
      [vm.countries]
    );

    const handleSelectFormList = React.useCallback(
      (option: OptionEntity) => {
        vm.setInputValueFromList(option.title);
      },
      [vm.setInputValueFromList]
    );

    return (
      <ControlAutocomplete
        value={vm.inputValue}
        onChange={vm.setInputValue}
        onClick={handleSelectFormList}
        isLoading={vm.isLoading}
        options={options}
        maxOptions={maxOptionsDisplay}
      />
    );
  }
);
