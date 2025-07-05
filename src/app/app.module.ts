//Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
//Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular'
// import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
//NgxEcharts
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import
{
  TitleComponent,
  TooltipComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
//Storage
import { StorageService } from './services/storage/app-storage.service';
import { SharedService } from './services/shared.service';

//Register it-IT locale
registerLocaleData(localeIt);

//Echarts
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  LegendComponent,
  UniversalTransition,
  CanvasRenderer
]);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    NgxEchartsModule.forRoot({ echarts }),
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StorageService,
    SharedService,
    //Override default locale settings for date time pipe
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate', locale: 'it-IT' } }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }