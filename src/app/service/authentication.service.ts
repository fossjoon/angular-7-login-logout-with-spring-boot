import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient,private router: Router) { }

     authenticateV(username, password) {
      return this.httpClient.post<User>(AUTH_API + 'signin',{
        username: username,
        password: password
      },httpOptions).pipe(map( userData => { 
           console.log(JSON.stringify(userData));
          sessionStorage.setItem('username',JSON.stringify(new User(userData.id,userData.username,userData.email,userData.roles,userData.accessToken,userData.tokenType) ));
          return userData;
         }));
    }

    authenticate(username, password) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.post<User>(AUTH_API + 'signin',{
        username: username,
        password: password
      },{headers}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',JSON.stringify(userData));
         // sessionStorage.setItem('username',username);
          return userData;
         })
  
      );
    }
 
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}