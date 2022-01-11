import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '메인', url: '/home', icon: 'home' },
    { title: '회원가입', url: '/register', icon: 'person-add' },
    { title: '로그인', url: '/login', icon: 'enter' },
    { title: '계정 정보', url: '/dashboard', icon: 'card' },
    { title: '계정 정보2', url: '/profile', icon: 'id-card' },
    { title: '계정 찾기', url: '/forgot-id', icon: 'key' },
    { title: '주차 현황', url: '/confirmation', icon: 'car' },
 ];
  constructor() {}
}
