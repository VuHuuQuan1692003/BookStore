import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private UserService: UserService,
    private message: NzMessageService,
  ) { }
  submited = false
  errer = false
  signinform = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })
  get email(): any {
    return this.signinform.get("email")
  }
  get password(): any {
    return this.signinform.get("password")
  }
  onSubmit() {

    if (this.signinform.valid) {
      this.submited = true
      this.errer = true
      // Goi API
      const data = {
        email: this.email.value,
        password: this.password.value
      }
      this.message.info('Đăng nhập thành công')

      this.UserService.signin(data)
      console.log('Login submitted:', this.signinform.value);


    } else {
      this.submited = true
      this.errer = false
      console.log("invalid");

    }
  }
}
