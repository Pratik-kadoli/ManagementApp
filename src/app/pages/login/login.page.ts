import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {

    username : '',
    password : ''
  }

  constructor(
    private router : Router,
    private authService : AuthService,
    private storageService : StorageService
  ) { }

  ngOnInit() {}

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();

    return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0)
  }

  loginAction() {

    if(this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res : any) => {
        if (res.userData){
          this.storageService.store(AuthConstants.AUTH , res.userData);
          this.router.navigate(['home']);
        } else {
          console.log ('Incorrect Username or Password');
        }
      },
      (error :any) => {   
        console.log("Network connection error");
      }
      )

    } else {
      console.log("Please give some information !!!")
    }

  }

}
