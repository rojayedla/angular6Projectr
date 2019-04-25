import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  lastUpdate = null;
  totalCount = 0;
  subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.totalCount$.subscribe(
      count => {
        this.totalCount = count;
      });
    this.subscription = this.sharedService.lastUpdate$.subscribe(
      lastUpdate => {
        this.lastUpdate = lastUpdate;
      });
  }
  clearTodos() {
    this.lastUpdate = null;
    this.totalCount = 0;
    this.sharedService.publishClearAll(true);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
