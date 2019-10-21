import { AbstractControl } from '@angular/forms';

import { LowerCaseValidator } from './lower-case.validator';

export class AlurapicValidators {

  static lowercase(control: AbstractControl) {
    return LowerCaseValidator.validate(control);
  }
}
