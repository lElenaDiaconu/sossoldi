import { Component } from '@angular/core';
import { StorageService } from './services/storage/app-storage.service';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent
{

  constructor(private storageService: StorageService) { }

  async ngOnInit()
  {
    await this.storageService.init(); // Inizializza una volta all'avvio dell'app

    EdgeToEdge.enable();

    // Imposta le variabili CSS per gli inset 
    const insets = await EdgeToEdge.getInsets();

    document.body.style.setProperty('--ion-safe-area-top', `${insets.top}px`);
    document.body.style.setProperty('--ion-safe-area-right', `${insets.right}px`);
    document.body.style.setProperty('--ion-safe-area-bottom', `${insets.bottom}px`);
    document.body.style.setProperty('--ion-safe-area-left', `${insets.left}px`);
  }
}
