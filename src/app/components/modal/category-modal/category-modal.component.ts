import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal.component';
import { Category as Category } from '../../../core/types/types'

@Component({
    selector: 'app-my-modal',
    templateUrl: './category-modal.component.html',
    styleUrl: '../modal.component.scss',
    standalone: false
})
export class CategoryModalComponent extends ModalComponent<Category>
{
    constructor(modalCtrl: ModalController)
    {
        super(modalCtrl);

        this.data = new Category();
    }
}