export class DataType
{
    static keys(): string[]
    { return []; }

    static keysLabels(): { [property: string]: string }
    {
        return {};
    }
}

export class Movement extends DataType
{
    Id?: number;
    Amount?: number;
    Category?: string;
    InsertDate?: Date;

    static override keys(): string[]
    {
        return ['Id', 'Amount', 'Category', 'InsertDate'];
    }

    static override keysLabels(): { [property: string]: string }
    {
        return {
            Id: 'ID',
            Amount: 'Amount',
            Category: 'Category',
            InsertDate: 'Insert Date'
        };
    }
}

export class Category extends DataType
{
    Id?: number;
    Name?: string;
    Color?: string;

    static override keys(): string[]
    {
        return ['Id', 'Name', 'Color'];
    }

    static override keysLabels(): { [property: string]: string }
    {
        return {
            Id: 'ID',
            Name: 'Name',
            Color: 'Color'
        };
    }
}

export enum StorageKeys
{
    Movements = 'Movements',
    Categories = 'Categories'
}

export type ListItemData = Category | Movement;

export interface ListItem
{
    label: string;
    type: 'text' | 'number' | 'date' | 'select';
    value: ListItemData;
}