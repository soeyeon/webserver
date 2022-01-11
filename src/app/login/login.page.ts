import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onLoginSubmit() {
    const login = {
    username: this.username,
    password: this.password,
    };
    if(login.username == undefined || login.password == undefined){
      alert('아이디와 패스워드를 입력해주세요.');
    }
    
  // if (this.validateService.validatelogin(this.username)) {
  //   this.flashMessage.show('입력된 값을 다시 확인하세요.', {
  //     cssClass: 'alert-danger',
  //     timeout: 3000,});
  //     return false;
  // }
    this.authService.authenticateUser(login).subscribe((data) => {
    if (data.success) {
    this.authService.storeUserData(data.token, data.userNoPW);
    this.router.navigate(['dashboard']);
    } else {
    this.router.navigate(['login']);
    }
    });
    }
    
  
  }
    

