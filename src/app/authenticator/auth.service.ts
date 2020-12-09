import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
interface AuthResponseData {
  kind: string;
  idToekn: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrfWttbvdeH8qxfmJ2sTo0xRLSbhQ5ir4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((err) => {
          let error = 'an error ';
          if (!err.error || !err.error.error) {
            return throwError;
          }
          switch (err.error.error.message) {
            case 'EMAIL_EXITS':
              error = 'this email is not exist';
          }
          return throwError(error);
        })
      );
  }
}
