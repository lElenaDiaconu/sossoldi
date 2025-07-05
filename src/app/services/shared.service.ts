import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService
{
    private dataSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

    public notifyUpdate(dataType: string): void
    {
        this.dataSubject.next(dataType);
    }

    public onUpdate$(): Observable<string>
    {
        return this.dataSubject.asObservable();
    }
}