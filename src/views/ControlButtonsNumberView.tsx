import * as React from 'react';
import { ControlButtonsNumberViewModel } from '../view-models/ControlButtonsNumberViewModel';
import { ControlButtons } from '../components/ControlButtons';
import { Button } from '../components/ui/Button';
import { observer } from 'mobx-react-lite';

type Props = {
  vm: ControlButtonsNumberViewModel;
};

export const ControlButtonsNumberView = observer(
  ({ vm }: Props): React.ReactElement => {
    return (
      <ControlButtons
        value={vm.value}
        onChange={vm.setValue}
        before={<Button onClick={vm.alertNumber}>Alert number</Button>}
        after={<Button onClick={vm.alertText}>Alert text</Button>}
      />
    );
  }
);
