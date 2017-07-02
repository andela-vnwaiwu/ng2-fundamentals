import { Component } from '@angular/core'

@Component({
  templateUrl: '/app/errors/404.component.html',
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}