export class Movement
{
    Id?: number;
    Amount?: number;
    Category?: string;
    InsertDate?: Date;
}

export class Category
{
    Id?: number;
    Name?: string;
    Color?: string;
}

export enum StorageKeys
{
    Movements = 'Movements',
    Categories = 'Categories'
}