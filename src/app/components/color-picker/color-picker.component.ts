import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonGrid, IonCol } from "@ionic/angular/standalone";

@Component({
    selector: 'color-picker',
    templateUrl: './color-picker.component.html',
    imports: [CommonModule, IonicModule]
})
export class ColorPickerComponent
{
    protected colors = [
        ['#3e1ebbff', '#0f195eff', '#14638eff'],
        ['#00ffddff', '#71dc4dff', '#b0cf3fff'],
        ['#c48225ff', '#cd3f3fff', '#b14fe6ff']
    ];
    @Output() colorSelected = new EventEmitter<string>();

    protected selectColor(color: string): void
    {
        this.colorSelected.emit(color);
    }
}