import { GreetingTypeEnum } from './greeting-type-enum.enum';
import { InjectionToken } from '@angular/core';

export const GREETING_TOKEN = new InjectionToken<Greeting[]>('greet');

export interface Greeting {

    sayHello(): string;

    type(): GreetingTypeEnum;
}
