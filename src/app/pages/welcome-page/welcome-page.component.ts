import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(){
    if (this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
