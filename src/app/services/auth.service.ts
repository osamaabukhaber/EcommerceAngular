// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private loggedIn = new BehaviorSubject<boolean>(false);

//   get isLoggedIn$(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }

//   login(email: string, password: string): boolean {
//     // Replace with real API call or user check
//     if (email === 'admin@example.com' && password === 'admin123') {
//       this.loggedIn.next(true);
//       return true;
//     }
//     this.loggedIn.next(false);
//     return false;
//   }

//   logout() {
//     this.loggedIn.next(false);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iuser } from '../Models/iuser';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<Iuser[]>(`${environment.baseUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map(users => {
          const success = users.length > 0;
          this.loggedIn.next(success);
          return success;
        })
      );
  }

  logout() {
    this.loggedIn.next(false);
  }
}

console.log('ssss');

