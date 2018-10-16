import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
      event.preventDefault();
      console.log(event);
      const username = event.target.elements[0].value;
      const password = event.target.elements[1].value;

      if (username === 'admin' && password === 'admin') {
          this.router.navigate(['loggedin']);
      }
  }

}
