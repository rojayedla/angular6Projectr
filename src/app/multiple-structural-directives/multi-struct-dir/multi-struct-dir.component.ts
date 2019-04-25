import { Component} from '@angular/core';

@Component({
  selector: 'app-multi-struct-dir',
  templateUrl: './multi-struct-dir.component.html',
  styleUrls: ['./multi-struct-dir.component.css']
})
export class MultiStructDirComponent {
  tabNumber = -1;

  tabs = [
    { title: 'Tab 1', content: 'Tab content 1' },
    { title: 'Tab 2', content: 'Tab content 2' },
    { title: 'Tab 3', content: 'Tab content 3' },
  ];

  setTab(num: number) {
    this.tabNumber = num;
  }

  isSelected(num: number) {
    return this.tabNumber === num;
  }
}
