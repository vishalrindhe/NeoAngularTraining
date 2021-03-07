import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() public pData: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution')
  }

}
