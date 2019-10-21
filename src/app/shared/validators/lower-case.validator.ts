import { AbstractControl } from '@angular/forms';

export class LowerCaseValidator {

  static validate(control: AbstractControl) {
    const value: string = control.value;

    if (value.trim() && !/^[a-z0-9_\-]+$/.test(value)) {
      return { lowercase: true };
    }

    return null;
  }
}
