import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    if(name=='saku'&&password=='1111')
    {
      this.router.navigateByUrl('task');
    }else{
      alert("Login Failed!");
    }

  }

}
