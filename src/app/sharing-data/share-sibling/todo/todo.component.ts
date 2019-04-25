import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
interface Todos {
  title: string;
  isCompleted: boolean;
  date: number;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnDestroy {

  todos: Todos[] = [];
  totalItems = 0;
  lastUpdate = 0;
  subscription: Subscription;

constructor(private sharedService: SharedService) {
 this.subscription = this.sharedService.clearAll$.subscribe(
    clear => {
      if (clear) {
        this.todos = [];
        this.totalItems = 0;
      }
    });
}
add(input) {
    this.todos.push({title: input.value, isCompleted: false, date: new Date().getTime()});
    this.sharedService.publishTotalCount(this.totalItems += 1);
    this.sharedService.publishLastUpdate(new Date().getTime());
    input.value = '';
  }
  remove(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.sharedService.publishTotalCount(this.totalItems -= 1);
    this.sharedService.publishLastUpdate(new Date().getTime());

  }
  toggle(todo) {
    todo.isCompleted = !todo.isCompleted;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
