import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  user: any;
  name: string;
  carnumber: string;
  time: string;
  parkingspot: string;

  constructor() {}
  ngOnInit() {
    this.name = this.user.name;
    this.carnumber = this.user.carnumber;
    this.time = this.user.time;
    this.parkingspot = this.user.parkingspot;
  }
}
