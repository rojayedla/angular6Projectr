import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-practice',
 templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @ViewChild('cellnumber') cellInputRef: ElementRef;
  contactNumber: string;
  htmlSnippet: any;
  constructor() {
    this.htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
    console.log(this.htmlSnippet);
  }

  ngOnInit() {
  }
    show(cellnumber: HTMLInputElement) {
      this.contactNumber = this.cellInputRef.nativeElement.value;
      console.log(this.contactNumber);
    }

    }


