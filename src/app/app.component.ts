import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'AngularPrj';
  errorMsg!: string;
  count : number = 0;

  handleIncrease = () =>{

    if(this.count < 5){
      this.count = this.count +1
      this.errorMsg  = ""
    } else{
      this.errorMsg  = "Count Cannot exceed 5"
    }

  }

  handleDecrease = () =>{
    if(this.count <= 0){
     this.errorMsg  = "Count Cannot go below 0"
    }else
    {
      this.errorMsg  = ""
      this.count = this.count -1
     }
    

  }

  handleReset = () =>{
    this.count = 0
  }
}
