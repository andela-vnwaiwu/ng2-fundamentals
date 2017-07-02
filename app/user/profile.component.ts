import { Component, OnInit } from '@angular/core'

@Component({
  templateUrl: '/app/user/profile.component.html',
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
    let firstName = new FormControl();
    let lastName = new FormControl();
    
  }
}