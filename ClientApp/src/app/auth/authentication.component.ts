import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }
  showError: boolean = false;

  login(){
    this.showError = false;
    this.authService.login().subscribe(result => {
      this.showError = !result;
    });
  }
  ngOnInit(): void {
  }

}
