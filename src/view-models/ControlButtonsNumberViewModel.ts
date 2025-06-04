import { action, computed, makeObservable, observable } from 'mobx';
import { isValidNumber } from '../utils/isValidNumber';
import { IDisposable } from '../interfaces/IDisposable';

export class ControlButtonsNumberViewModel implements IDisposable {
  private _value = '';

  constructor() {
    this.alertText = this.alertText.bind(this);
    this.alertNumber = this.alertNumber.bind(this);

    makeObservable<this, '_value'>(this, {
      _value: observable,
      value: computed,
      setValue: action.bound,
    });
  }

  get value(): string {
    return this._value;
  }

  setValue(value: string): void {
    this._value = value;
  }

  alertText(): void {
    alert(this.value);
  }

  alertNumber(): void {
    if (isValidNumber(this.value)) {
      alert(this.value);
    } else {
      alert('Enter valid number');
    }
  }

  dispose?: VoidFunction | undefined;
}
