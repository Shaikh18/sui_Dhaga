import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.page.html',
  styleUrls: ['./authenticator.page.scss'],
})
export class AuthenticatorPage implements OnInit {
  isLoadingMode = true;
  isloading = false;
  error: string = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // if (this.isLoadingMode) {
    //   this.authenticateForm = new FormGroup({
    //     username: new FormControl(null, Validators.required),
    //     password: new FormControl(null, Validators.required),
    //     confirmpassword: new FormControl(null, Validators.required),
    //     number: new FormControl(null, Validators.required),
    //   });
    // } else if (!this.isLoadingMode) {
    //   this.authenticateForm = new FormGroup({
    //     number: new FormControl(null, Validators.required),
    //     password: new FormControl(null, Validators.required),
    //   });
    // }
    // this.authenticateForm.statusChanges.subscribe((status) =>
    //   console.log(status, 'ng')
    // );
  }
  onSwitchMode() {
    this.isLoadingMode = !this.isLoadingMode;
    console.log('worked', this.isLoadingMode);
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isloading = true;
    if (!this.isLoadingMode) {
      const username = form.value.username;
      const number = form.value.number;
      const password = form.value.password;
      const confirmpassword = form.value.confirmpassword;
      this.authService.signUp(username, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isloading = false;
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isloading = false;
        }
      );
    } else {
      //
    }
  }
}
