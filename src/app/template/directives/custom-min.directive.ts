import { Directive, Input } from '@angular/core'
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[custonMin] [ngModel]', //Es la manera en que le voy a decir a angular en como es que quiero que busque mi directiva personalizada. Y tambien tiene que estar asociado a un ngModel, es decir, solo se podra aplicar esta directiva si encuentra el customMin y tiene un ngModel.
    //Tenemos que colocarle ciertas dependencias a la directiva, como ser: providers
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true
        }
    ]
})

export class CustomMinDirective implements Validator{ //El Validator es un objeto que viene con angular, para implementar diferentes tipos de validaciones como ser el required, min length, etc.

    @Input() minimo!: number; //Recibo el valor minimo desde el padre, por eso utilizo un input
    
    constructor() {}

    validate( control: FormControl ) {
        const inputValue = control.value;
        return ( inputValue < this.minimo ) ? { 'customMin': true } : null;
        //Si inputValue es menor a this.minimo, entonces que regrese un objeto con el error, en caso contrario, el error noe xiste (por eso es null)
    }
}