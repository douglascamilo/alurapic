import { TokenService } from './../../core/token/token.service';
import { Greeting } from './greeting';
import { GreetingTypeEnum } from './greeting-type-enum.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class Hello2 implements Greeting {

    constructor(private tokenService: TokenService) {}

    sayHello(): string {
        return `Hello 2 - ${this.tokenService.hasToken()}`;
    }

    type(): GreetingTypeEnum {
        return GreetingTypeEnum.HELLO_2;
    }
}
