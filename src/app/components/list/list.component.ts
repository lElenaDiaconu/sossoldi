import { Component, input, InputSignal, InputSignalWithTransform } from '@angular/core';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/angular/standalone';
import { Movement } from 'src/app/core/types/types';

@Component({
    selector: 'movements-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent
{
    public listData: InputSignal<Movement[] | null> = input<Movement[] | null>([]);

    constructor() { }
}