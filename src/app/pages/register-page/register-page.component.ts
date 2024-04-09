import { Component, WritableSignal, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerForm: FormGroup = this._formBuilder.group({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl(''),
    role: new FormControl('user'),
    password: new FormControl('', Validators.required),
  });

  $showPassword: WritableSignal<boolean> = signal<boolean>(false);
  visibilityIcon: string = 'visibility';


  constructor(
    private _formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ){  }

  ngOnInit() { 
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']); 
    }
  }

  showPasswordEye() {
    this.$showPassword.set(!this.$showPassword());
    this.visibilityIcon = this.$showPassword() ? 'visibility_off' : 'visibility';
  }

  onSubmit(){
    this.loginService.createUser(this.registerForm.value).subscribe({
      next: () => {
        this.loginService.requestToken(this.registerForm.value.username, this.registerForm.value.password).subscribe({
          next: res => {
            this.loginService.setToken(res.access_token);
            this.router.navigateByUrl('/home');
          },
        });
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    });
  }

}
