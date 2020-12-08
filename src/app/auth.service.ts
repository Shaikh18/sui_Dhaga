// export class AuthService {
//   loggedIn = false;

//   isAuthenticated() {
//     const promise = new Promise(
//       (resolve, reject) => {
//         setTimeout(() => {
//           resolve(this.loggedIn);
//         }, 800);
//       }
//     );
//     return promise;
//   }

//   login() {
//     this.loggedIn = true;
//   }

//   logout() {
//     this.loggedIn = false;
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './register/post.model';
import { config } from 'src/config/main.config';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }
  createAndStorePost(
    username: string,
    password: number,
    password_confirmation: number,
    phone: number,
    email: string
  ) {
    const postData: Post = {
      name: username,
      email: email,
      password,
      password_confirmation,
      phone,
    };
    this.http
      .post('http://127.0.0.1:8000/api/login', postData)
      .subscribe(
        (responseData) => {
          console.log(responseData, 'server');
        },
        (error) => {
          console.log(error, 'err');
          this.error.next(error.message);
        }
      );
  }
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
  // fetchPosts() {
  //   let searchParams = new HttpParams();
  //   searchParams = searchParams.append('print', 'pretty');
  //   searchParams = searchParams.append('custom', 'key');
  //   return this.http
  //     .get<{ [key: string]: Post }>(
  //       'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
  //       {
  //         headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
  //         params: searchParams
  //       }
  //     )
  //     .pipe(
  //       map(responseData => {
  //         const postsArray: Post[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return postsArray;
  //       }),
  //       catchError(errorRes => {
  //         // Send to analytics server
  //         return throwError(errorRes);
  //       })
  //     );
  // }

  // deletePosts() {
  //   return this.http.delete(
  //     'https://ng-complete-guide-c56d3.firebaseio.com/posts.json'
  //   );
  // }
}
