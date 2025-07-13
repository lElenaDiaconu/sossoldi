import { Component, ElementRef, input, InputSignal, InputSignalWithTransform, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Category, DataType, Movement } from 'src/app/core/types/types';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent
{
    public listData: InputSignal<any[] | null> = input<any[] | null>([]);
    public displayColumns: InputSignal<string[]> = input<string[]>([]);
    public labels: InputSignal<{ [columnName: string]: string }> = input<{ [columnName: string]: string }>({});

    @ViewChildren('listItem', { read: ElementRef }) card!: QueryList<ElementRef>;

    constructor(private gestureCtrl: GestureController, private el: ElementRef)
    { }

    protected isDate(value: any): boolean
    {
        return value instanceof Date;
    }

    ngAfterViewInit()
    {
        this.card.forEach((elementRef, index) =>
        {
            let pressTimer: any = null;

            const gesture = this.gestureCtrl.create({
                el: elementRef.nativeElement,
                threshold: 0,
                gestureName: 'long-press',
                onStart: () =>
                {
                    pressTimer = setTimeout(() =>
                    {
                        this.onLongPress(index);
                    }, 500); // 500ms for long press
                },
                onEnd: () =>
                {
                    clearTimeout(pressTimer);
                    console.log('Gesture ended');
                }
            });

            gesture.enable();
        });
    }

    private onLongPress(index: number)
    {
        const element = this.card.get(index);
        if (element)
        {
            console.log('Long press detected on item:', index);
            // element.nativeElement.style.setProperty('transform', this.getNewTransform());
        }
    }
}