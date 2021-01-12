import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    
  usr : User;
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.usr = JSON.parse(sessionStorage.getItem('username'));
    console.log("user info" + JSON.stringify(this.usr));
  }

}