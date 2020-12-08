import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signupForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'number': new FormControl(),
      'password': new FormControl()

    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status, 'ng')
    );
  }
  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }
}
