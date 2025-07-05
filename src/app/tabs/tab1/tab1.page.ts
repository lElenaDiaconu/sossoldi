import { Component, inject } from '@angular/core';
import { StorageService } from '../../services/storage/app-storage.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';
import { SharedService } from 'src/app/services/shared.service';
import { MovementModalComponent } from 'src/app/components/modal/movement-modal/movement-modal.component';
import { CategoryModalComponent } from 'src/app/components/modal/category-modal/category-modal.component';
import { StorageKeys } from 'src/app/core/types/types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page
{
  protected isModalOpen: boolean = false;
  private sharedService: SharedService = inject(SharedService);

  constructor(
    private modalController: ModalController,
    private _storage: StorageService
  ) { }

  public addMovement(): void
  {
    this.openModalMovements();
  }

  async openModalMovements()
  {
    const modal = await this.modalController.create({
      component: MovementModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (data != null)
    {
      this._storage.appendMovement(data).then(() =>
      {
        this.sharedService.notifyUpdate(StorageKeys.Movements);
      });
    }
  }


  public addCategory(): void
  {
    this.openModalCategory();
  }

  async openModalCategory()
  {
    const modal = await this.modalController.create({
      component: CategoryModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (data != null)
    {
      this._storage.appendCategory(data).then(() =>
      {
        this.sharedService.notifyUpdate(StorageKeys.Categories);
      });
    }
  }
}
