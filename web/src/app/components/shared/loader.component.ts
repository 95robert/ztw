/**
 * Created by akselon on 2017-04-24.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'loader',
    template: `<img src="img/ellipsis.gif" style="height: 1.5em;" />`,
    styles: [`
    `]
})
export class LoaderComponent {
    @Input()
    alertType: string = "info";
}

