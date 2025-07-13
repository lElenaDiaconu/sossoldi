import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BasicDatasetComponentModule } from '../../charts/charts.module';
import { CategoryModalComponent } from 'src/app/components/modal/category-modal/category-modal.component';
import { MovementModalComponent } from 'src/app/components/modal/movement-modal/movement-modal.component';
import { ColorPickerComponent } from 'src/app/components/color-picker/color-picker.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BasicDatasetComponentModule,
    Tab1PageRoutingModule,
    ColorPickerComponent
  ],
  declarations: [Tab1Page, CategoryModalComponent, MovementModalComponent]
})
export class Tab1PageModule { }
