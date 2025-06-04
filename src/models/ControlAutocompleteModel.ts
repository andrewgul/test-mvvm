import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';
import { IDisposable } from '../interfaces/IDisposable';
import { debounce } from '../utils/debounce';

type PrivateFields =
  | '_countries'
  | '_inputValue'
  | '_isLoading'
  | '_getCountries'
  | '_setCountries';

export class ControlAutocompleteModel implements IDisposable {
  private _countries: CountryInfo[] | null = null;
  private _inputValue = '';
  private _isLoading = false;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _countries: observable.ref,
      _inputValue: observable,
      _isLoading: observable,
      countries: computed,
      inputValue: computed,
      isLoading: computed,
      _getCountries: action.bound,
      _setCountries: action.bound,
      setInputValue: action,
    });

    this.setInputValueFromList = this.setInputValueFromList.bind(this);
  }

  get countries(): CountryInfo[] | null {
    return this._countries;
  }

  get inputValue(): string {
    return this._inputValue;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  private _getCountriesDebounced = debounce(() => {
    this._getCountries();
  });

  private async _getCountries(): Promise<void> {
    if (this._isLoading) {
      return;
    }

    this._isLoading = true;

    const response = await getCountryByName(this._inputValue);

    runInAction(() => {
      this._setCountries(response);
      this._isLoading = false;
    });
  }

  private _setCountries = (value: CountryInfo[] | null) => {
    this._countries = value;
  };

  setInputValue(value: string, initRequest = true): void {
    if (this._isLoading) {
      return;
    }

    this._inputValue = value;

    if (initRequest) {
      this._getCountriesDebounced();
    }
  }

  setInputValueFromList(value: string): void {
    this._setCountries(null);
    this.setInputValue(value, false);
  }

  dispose?: VoidFunction;
}
