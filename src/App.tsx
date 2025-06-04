import React from 'react';
import './App.css';
import { useStore } from './hooks/useStore';
import { ControlButtonsClickViewModel } from './view-models/ControlButtonsClickViewModel';
import { ControlButtonsNumberViewModel } from './view-models/ControlButtonsNumberViewModel';
import { ControlButtonsClickView } from './views/ControlButtonsClickView';
import { ControlButtonsNumberView } from './views/ControlButtonsNumberView';
import { ControlAutocompleteView } from './views/ControlAutocompleteView';
import { ControlAutocompleteViewModel } from './view-models/ControlAutocompleteViewModel';
import { ControlAutocompleteModel } from './models/ControlAutocompleteModel';

function App() {
  const controlButtonsClickViewModel = useStore(
    new ControlButtonsClickViewModel()
  );

  const controlButtonsNumberViewModel = useStore(
    new ControlButtonsNumberViewModel()
  );

  const controlAutocompleteViewModel = useStore(
    new ControlAutocompleteViewModel(new ControlAutocompleteModel())
  );

  const controlAutocompleteViewModel2 = useStore(
    new ControlAutocompleteViewModel(new ControlAutocompleteModel())
  );

  return (
    <div className="container">
      <h3 className="title">Контрол с кнопками (Hello World!)</h3>
      <ControlButtonsClickView vm={controlButtonsClickViewModel} />
      <h3 className="title">Контрол с кнопками (цифра)</h3>
      <ControlButtonsNumberView vm={controlButtonsNumberViewModel} />
      <h3 className="title">Контрол-автокомплит (максимум 3)</h3>
      <ControlAutocompleteView vm={controlAutocompleteViewModel} maxOptionsDisplay={3} />
      <h3 className="title">Контрол-автокомплит (максимум 10)</h3>
      <ControlAutocompleteView vm={controlAutocompleteViewModel2} maxOptionsDisplay={10} />
    </div>
  );
}

export default App;
