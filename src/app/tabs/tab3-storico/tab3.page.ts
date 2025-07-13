import { Component, effect, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ListItem, Movement, StorageKeys } from '../../core/types/types';
import { StorageService } from '../../services/storage/app-storage.service';
import { SharedService } from 'src/app/services/shared.service';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit
{
  //Properties
  protected listData: WritableSignal<Movement[]> = signal<Movement[]>([]);
  protected displayColumns: string[] = [];
  protected labels: WritableSignal<{ [prop: string]: string }> = signal<{ [prop: string]: string }>({});

  //Services
  private sharedService: SharedService = inject(SharedService);

  private unsubscribe = new Subject<void>();

  constructor(
    private _storage: StorageService
  )
  { }

  ngOnInit()
  {
    //Init movements
    this._storage.getMovements().then((movements: Movement[]) =>
    {
      this.listData.set(movements);
      this.displayColumns = Movement.keys().filter(key => key !== 'Id');
      this.labels.set(Movement.keysLabels());
    });

    //Update movements on change
    this.sharedService.onUpdate$().pipe(takeUntil(this.unsubscribe))
      .subscribe((dataType: string) =>
      {
        if (dataType === StorageKeys.Movements)
        {
          this.reloadList();
        }
      });
  }

  ngOnDestroy()
  {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  protected clearAllMovements()
  {
    this._storage.clearMovements();

    this.listData.set([]);
  }

  protected reloadList()
  {
    this._storage.getMovements().then((movements: Movement[]) =>
    {
      this.listData.update(() => { return movements; });
    })
  }
}
