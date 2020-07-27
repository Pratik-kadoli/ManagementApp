import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService : HttpService,
    private storageService : StorageService,
    private router: Router
    ) {}

    login(postDate: any) : Observable<any> {
      return this.httpService.post('login',postDate);
    }

    signup(postDate: any) : Observable<any> {
      return this.httpService.post('signup',postDate);
    }

    logout() {
      this.storageService.removeItem(AuthConstants.AUTH).then(res =>{
        this.router.navigate(['']);
      })
    }
}
