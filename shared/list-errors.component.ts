import { Component, Input } from '@angular/core';
import { Errors } from '../core';


@Component({
    selector: 'app-list-errors',
    templateUrl: './list-errors.component.html'
})

export class ListErrorsComponent {
    formattedErrors: Array<string> = [];

    @Input()
    set errorss(errorList : Errors) {
        console.log('BAU:::',errorList.error);
        this.formattedErrors = Object.keys(errorList.error || {})
            .map(key => `${key}${errorList.error}`);
        console.log('ERR:::',this.formattedErrors);


    }

    get errorList() { return this.formattedErrors; }
}