import { Component, WritableSignal, signal } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup = this._formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  $showPassword: WritableSignal<boolean> = signal<boolean>(false);
  visibilityIcon: string = 'visibility';

  constructor(
    private _formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private messagesService: MessagesService
  ){  }

  ngOnInit() { 
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']); 
    }
  }

  onSubmit(username: string, password: string) {
    this.loginService.requestToken(username, password).subscribe({
      next: res => {
        this.loginService.setToken(res.access_token);
        this.router.navigateByUrl('/home');
        this.messagesService.showMessageOnSnackbar("¡Bienvenido a iPet, " + username + "!");
      },
      error: (error: HttpErrorResponse) => {
        this.messagesService.showErrorOnSnackbar(error);
        (this.loginForm.get('password') as FormControl).reset();
      },
    });
  }

  showPasswordEye() {
    this.$showPassword.set(!this.$showPassword());
    this.visibilityIcon = this.$showPassword() ? 'visibility_off' : 'visibility';
  }

}


