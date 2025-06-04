import { action, computed, makeObservable, observable } from 'mobx';
import { IDisposable } from '../interfaces/IDisposable';

export class ControlButtonsClickViewModel implements IDisposable {
  readonly hardcodeValue: string;

  private _value = '';

  constructor({
    hardcodeValue = 'Hello World!',
  }: { hardcodeValue?: string } = {}) {
    this.hardcodeValue = hardcodeValue;

    makeObservable<this, '_value'>(this, {
      _value: observable,
      value: computed,
      setValue: action.bound,
      setHardcodeValue: action.bound,
      clearValue: action.bound,
    });
  }

  get value(): string {
    return this._value;
  }

  setValue(value: string): void {
    this._value = value;
  }

  setHardcodeValue(): void {
    this._value = this.hardcodeValue;
  }

  clearValue(): void {
    this._value = '';
  }

  dispose?: VoidFunction | undefined;
}
