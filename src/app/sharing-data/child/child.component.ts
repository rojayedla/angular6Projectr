import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
      @Input() all: number;
      @Input() male: number;
      @Input() female: number;
      selectedRadioButtonValue = 'All';

      @Output()
      countRadioButtonSelectionChanged: EventEmitter<string> =
                                          new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onRadioButtonSelectionChange() {
    console.log('event');
    this.countRadioButtonSelectionChanged
        .emit(this.selectedRadioButtonValue);
}

}
