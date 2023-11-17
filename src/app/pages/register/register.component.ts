import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IUsersignup } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  listEmail!: any[]
  submited = false
  constructor(
    private UserService: UserService,
    private router: Router,
    private message: NzMessageService,

  ) {

  }

  signupform = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  get firstname() {
    return this.signupform.get("firstname")
  }
  get lastname() {
    return this.signupform.get("lastname")
  }
  get phoneNumber() {
    return this.signupform.get("phoneNumber")
  }
  get email() {
    return this.signupform.get("email")
  }
  get password() {
    return this.signupform.get("password")
  }
  get confirmPassword(): any {
    return this.signupform.get("confirmPassword")
  }

  onSubmit() {
    // console.log(this.signupform.valid, this.signupform.value);

    if (this.signupform.valid) {


      this.UserService.getAll().subscribe((data: any) => {
        this.listEmail = data.map((item: any) => {
          return item.email
        })
        if (this.listEmail.includes(this.email?.value)
        ) {
          this.message.info('Email đã tồn tại')
        } else {
          const userformsignup: IUsersignup = {
            firstname: this.firstname?.value || "",
            lastname: this.lastname?.value || "",
            phoneNumber: this.phoneNumber?.value || "",
            email: this.email?.value || "",
            password: this.password?.value || "",
            confirmPassword: this.confirmPassword?.value,
            image: "",
            birthday: "",
            gender: "",
            address: "",
            role: "user"
          }
          this.UserService.signup(userformsignup).subscribe((dataUser: any) => {
            const user = {
              email: dataUser.user.email,
              password: dataUser.user.confirmPassword
            }
            this.message.info('Đăng ký thành công')
            this.UserService.signin(user)

          })
        }

      })


    }
  }
}
