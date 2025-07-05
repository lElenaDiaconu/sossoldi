//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Ionic
import { IonicModule } from '@ionic/angular';
//App
import { ListComponent } from './list.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [ListComponent],
    exports: [ListComponent]
})
export class ListComponentModule { }
