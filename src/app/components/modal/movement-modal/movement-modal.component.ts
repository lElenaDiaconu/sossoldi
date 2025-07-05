//Angular
import { Component, signal, WritableSignal } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Ionic
import { ModalComponent } from '../modal.component';
//App
import { Category, Movement as Movement } from '../../../core/types/types'
import { StorageService } from '../../../services/storage/app-storage.service';

@Component({
    selector: 'app-my-modal',
    templateUrl: './movement-modal.component.html',
    styleUrl: '../modal.component.scss',
    standalone: false
})
export class MovementModalComponent extends ModalComponent<Movement>
{
    protected customPopoverOptions = {
        header: 'Categorie',
        // subHeader: '',
        // message: 'Selezionare la categoria in cui rientra la spesa',
    };

    // private sharedService: SharedService = inject(SharedService);
    protected categories: WritableSignal<Category[]> = signal([]);

    constructor(
        protected override modalCtrl: ModalController,
        private _storage: StorageService
    )
    {
        super(modalCtrl);
        //Init data
        this.data = new Movement();
    }

    ngOnInit()
    {
        this.loadCategories();
    }

    private loadCategories()
    {
        //Get saved categories
        this._storage.getCategories().then((categories: Category[]) =>
        {
            this.categories.set(categories);
        });
    }

    protected handleChange(event: CustomEvent)
    {
        this.data = {
            ...this.data,
            Category: event.detail.value.Name
        }
    }
}