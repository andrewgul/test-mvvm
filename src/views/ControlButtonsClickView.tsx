import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { ControlButtonsClickViewModel } from '../view-models/ControlButtonsClickViewModel';
import { ControlButtons } from '../components/ControlButtons';
import { Button } from '../components/ui/Button';

type Props = {
  vm: ControlButtonsClickViewModel;
};

export const ControlButtonsClickView = observer(
  ({ vm }: Props): React.ReactElement => {
    return (
      <ControlButtons
        value={vm.value}
        onChange={vm.setValue}
        after={
          <>
            <Button onClick={vm.clearValue}>Clear</Button>
            <Button onClick={vm.setHardcodeValue}>{vm.hardcodeValue}</Button>
          </>
        }
      />
    );
  }
);
