import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BasicDatasetComponentModule } from '../../charts/charts.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ModalComponent } from '../../components/modal/modal.component';
import { CategoryModalComponent } from 'src/app/components/modal/category-modal/category-modal.component';
import { MovementModalComponent } from 'src/app/components/modal/movement-modal/movement-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BasicDatasetComponentModule,
    Tab1PageRoutingModule,

  ],
  declarations: [Tab1Page, CategoryModalComponent, MovementModalComponent]
})
export class Tab1PageModule { }
