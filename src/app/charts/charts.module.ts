import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicDatasetComponent } from './test/test.chart.component';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, NgxEchartsDirective, NgxEchartsModule],
    declarations: [BasicDatasetComponent],
    exports: [BasicDatasetComponent]
})
export class BasicDatasetComponentModule { }
