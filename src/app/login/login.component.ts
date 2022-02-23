import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg ='';
  loginForm!: FormGroup;

  constructor(private _service: RegistrationService, private _router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [
        Validators.required, Validators.minLength(3)]
        // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$') //it nhat 3 ki tu, 1 chu, 1 so.
      )
    })
  }

  login() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received.");
        this._router.navigate(['/loginSuccess'])
      },
        error => {
        console.log("exception occured.");
        this.msg = "Bad credentials, please enter valid emailId and password.";
        }
    )
  }

  reset() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
