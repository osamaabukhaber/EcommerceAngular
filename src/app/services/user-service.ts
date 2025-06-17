import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
httpHeaders={}

  constructor(private http:HttpClient) {

    this.httpHeaders={headers:new HttpHeaders({
    'Content-Type': 'application/json',
    // "Authorization" : ""
    })};


  }

  addNewUser(newUser:Iuser):Observable<Iuser> {
    return this.http.post<Iuser>(`${environment.baseUrl}`, newUser,this.httpHeaders);
  }
}
