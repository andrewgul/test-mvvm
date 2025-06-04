import { computed, makeObservable } from 'mobx';
import { ControlAutocompleteModel } from '../models/ControlAutocompleteModel';
import { IDisposable } from '../interfaces/IDisposable';
import { CountryInfo } from '../api/apiService';

export class ControlAutocompleteViewModel implements IDisposable {
  constructor(private readonly _model: ControlAutocompleteModel) {
    this.dispose = this.dispose.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.setInputValueFromList = this.setInputValueFromList.bind(this);

    makeObservable(this, {
      inputValue: computed,
      countries: computed,
      isLoading: computed,
    });
  }

  get inputValue(): string {
    return this._model.inputValue;
  }

  get countries(): CountryInfo[] | null {
    return this._model.countries;
  }

  get isLoading() {
    return this._model.isLoading;
  }

  setInputValue(value: string): void {
    this._model.setInputValue(value);
  }

  setInputValueFromList(value: string): void {
    this._model.setInputValueFromList(value);
  }

  dispose(): void {
    this._model.dispose?.();
  }
}
