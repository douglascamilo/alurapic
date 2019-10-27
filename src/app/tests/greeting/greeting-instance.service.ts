import { GreetingTypeEnum } from './greeting-type-enum.enum';
import { Injectable, Injector } from '@angular/core';
import { Greeting, GREETING_TOKEN } from './greeting';

@Injectable()
export class GreetingInstanceService {

  constructor(private injector: Injector) { }

  getBy(type: GreetingTypeEnum): Greeting {
    return this.injector
      .get(GREETING_TOKEN)
      .find(item => item.type() === type);
  }
}
