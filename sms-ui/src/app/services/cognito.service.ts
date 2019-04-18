import { Injectable } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

Amplify.configure({
  Auth: {
    region: environment.awsRegion,
    userPoolId: environment.cognitoUserPoolId,
    userPoolWebClientId: environment.cognitoClientId,
  }
});


@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  private currentUserStream = new BehaviorSubject<any>({});
  public currentUser$ = this.currentUserStream.asObservable();

  private newPasswordUser: any = null;

  constructor() {
    this.setup();
  }

  async login(username: string, password: string) {
    const response = await Auth.signIn(username, password);
    console.log(response);

    if (response.challengeName !== 'NEW_PASSWORD_REQUIRED') {
      this.setup();
    } else {
      this.newPasswordUser = response;
      throw {
        message: 'NEW_PASSWORD_REQUIRED'
      };
    }
  }

  async setNewPassword(password: string) {
    const response = await Auth.completeNewPassword(
      this.newPasswordUser,
      password,
      {}
    );
    console.log(response);
    this.setup();
  }

  private setup() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        // initialize the jwt for axios
        Auth.currentSession()
          .then(data => {
            localStorage.setItem('token', data.getIdToken().getJwtToken());
            const currentUser = data.getIdToken().payload;
            this.currentUserStream.next(currentUser);
          });
        // create interval to refresh the jwt periodically
        setInterval(() => {
          Auth.currentSession()
            .then(data => {
              localStorage.setItem('token', data.getIdToken().getJwtToken());
            });
        }, 300000);
      })
      .catch(e => {
        return;
      });
  }
}
