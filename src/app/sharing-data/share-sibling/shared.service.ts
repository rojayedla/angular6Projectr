import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

   // observable string source
   private totalCount = new Subject<number>();
   private lastUpdate = new Subject<number>();
   private clearAll = new Subject<boolean>();

   // observable string streams
   totalCount$ = this.totalCount.asObservable();
   lastUpdate$ = this.lastUpdate.asObservable();
   clearAll$ = this.clearAll.asObservable();

   // service message commands
   publishTotalCount(count: number) {
     this.totalCount.next(count);
   }

   publishLastUpdate(date: number) {
     this.lastUpdate.next(date);
   }

   publishClearAll(clear: boolean) {
     this.clearAll.next(clear);
   }
}
