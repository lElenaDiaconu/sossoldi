import { ModalController } from '@ionic/angular';

export class ModalComponent<T>
{
    protected data: T | null = null;

    constructor(protected modalCtrl: ModalController) { }

    protected dismiss()
    {
        return this.modalCtrl.dismiss(this.data as T, 'insert');
    }

    protected cancel()
    {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
}