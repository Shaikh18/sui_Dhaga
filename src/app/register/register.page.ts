import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../auth.service';
import { Post } from './post.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;

  constructor(private PostCreate: PostsService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(),
      number: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      email: new FormControl(),
    });
    this.signupForm.statusChanges.subscribe((status) =>
      console.log(status, 'ng')
    );
  }
  onSubmit() {
    const {
      username,
      password,
      confirmPassword,
      number,
      email,
    } = this.signupForm.value;
    console.log(this.signupForm);
    this.PostCreate.createAndStorePost(
      username,
      password,
      confirmPassword,
      number,
      email
    );
    // this.signupForm.reset();
  }
}
