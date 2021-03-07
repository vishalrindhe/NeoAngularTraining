import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public myid = 'testId'
  public msg= ''
  public name = ""
  constructor() { }

  // clickEvent(event: any){
  //   console.log(event);
  //   // this.msg = 'Event function invoked';
  //   this.msg = event.type;
  // }
  // template reference variable
  // msgMethod(value: string){
  //   this.msg=`your name is ${value}`

  // }
  
  ngOnInit(): void {
  }

}
