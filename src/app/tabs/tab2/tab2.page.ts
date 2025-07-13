import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Category, StorageKeys } from 'src/app/core/types/types';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage/app-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page
{

  //Properties
  protected listData: WritableSignal<Category[]> = signal<Category[]>([]);
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
    //Init categories
    this._storage.getCategories().then((category: Category[]) =>
    {
      this.listData.set(category);
      this.displayColumns = Category.keys().filter(key => key !== 'Id');
      this.labels.set(Category.keysLabels());
    });

    //Update categories on change
    this.sharedService.onUpdate$().pipe(takeUntil(this.unsubscribe))
      .subscribe((dataType: string) =>
      {
        if (dataType === StorageKeys.Categories)
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

  protected reloadList()
  {
    this._storage.getCategories().then((categories: Category[]) =>
    {
      this.listData.update(() => { return categories; });
    })
  }
}
