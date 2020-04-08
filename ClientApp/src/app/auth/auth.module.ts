import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  providers:[AuthenticationService, AuthenticationGuard],
  exports: [AuthenticationComponent]
})
export class AuthModule { }
