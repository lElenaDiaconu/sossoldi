import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page as TabStoricoComponent } from './tab3.page';

import { TabStoricoRoutingModule } from './tab3-routing.module';
import { ListComponentModule } from '../../components/list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabStoricoRoutingModule,
    ListComponentModule
  ],
  declarations: [TabStoricoComponent]
})
export class TabStoricoModule { }
