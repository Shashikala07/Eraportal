import { AuthService } from './../backend.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(public AuthService: AuthService,
              ) { }

              

  ngOnInit() : void {
  }
    
    
  
} 
