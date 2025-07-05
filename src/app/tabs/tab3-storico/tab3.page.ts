import { Component, effect, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { Movement, StorageKeys } from '../../core/types/types';
import { StorageService } from '../../services/storage/app-storage.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subject, takeUntil } from 'rxjs';

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
    });

    //Update movements on change
    this.sharedService.onUpdate$().pipe(takeUntil(this.unsubscribe)).subscribe((dataType: string) =>
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
