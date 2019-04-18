import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  newPasswordRequired = false;
  newPassword = '';
  confirmationPassword = '';


  constructor(private cognitoService: CognitoService) { }

  ngOnInit() {
  }

  async submit() {
    try {
      await this.cognitoService.login(this.username, this.password);
    } catch (err) {
      console.log(err);
      if (err.message === 'NEW_PASSWORD_REQUIRED') {
        this.newPasswordRequired = true;
      }
    }
  }

  async submitNewPassword() {
    try {
      await this.cognitoService.setNewPassword(this.newPassword);
    } catch (err) {
      console.log(err);
      if (err.message === 'NEW_PASSWORD_REQUIRED') {
        this.newPasswordRequired = true;
      }
    }
  }

}
