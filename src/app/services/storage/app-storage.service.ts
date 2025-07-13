import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Category, Movement, StorageKeys } from 'src/app/core/types/types';

@Injectable({
    providedIn: 'root'
})
export class StorageService
{
    private _storage: Storage | null = null;
    private _movementId: number = 0;
    private _categoryId: number = 0;

    constructor(private storage: Storage)
    { }

    public async init()
    {
        //Init storage
        const storage = await this.storage.create();
        this._storage = storage;

        //Ids
        this._movementId = (await this.getMovements())?.length;
    }

    private set(key: string, value: any): void
    {
        this._storage?.set(key, value);
    }

    private get(key: string): any
    {
        return this._storage?.get(key);
    }

    public async appendMovement(value: Movement): Promise<void>
    {
        const oldValue: Movement[] = await this.get(StorageKeys.Movements);

        if (value !== null && value !== undefined)
        {
            //Set insert date - default to now if not provided
            value.InsertDate = value.InsertDate ? new Date(value.InsertDate) : new Date();

            //Set id
            value.Id = ++this._movementId;

            if (oldValue !== null && oldValue !== undefined)
            {
                this.set(StorageKeys.Movements, [...oldValue, value]);
            } else
            {
                this.set(StorageKeys.Movements, [value]);
            }
        }
    }

    public async appendCategory(value: Category): Promise<void>
    {
        const oldValue: Movement[] = await this.get(StorageKeys.Categories);

        if (value !== null && value !== undefined)
        {
            //Set insert date
            value.Id = ++this._categoryId;

            if (oldValue !== null && oldValue !== undefined)
            {
                this.set(StorageKeys.Categories, [...oldValue, value]);
            } else
            {
                this.set(StorageKeys.Categories, [value]);
            }
        }
    }

    public async getMovements(): Promise<Movement[]>
    {
        return await this._storage?.get(StorageKeys.Movements);
    }

    public async getCategories(): Promise<Category[]>
    {
        return await this._storage?.get(StorageKeys.Categories);
    }

    public clearMovements(): void
    {
        this._storage?.set(StorageKeys.Movements, []).then(() => { this._movementId = 0; });
    }
}