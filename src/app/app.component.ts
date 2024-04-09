import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iPetWeb';
  isSidenavOpen = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit() {
    const body = document.querySelector('body'),
      sidebar = body?.querySelector('nav'),
      toggle = body?.querySelector(".toggle"),
      searchBtn = body?.querySelector(".search-box");
    toggle?.addEventListener("click", () => {
      sidebar?.classList.toggle("close");
    })
    searchBtn?.addEventListener("click", () => {
      sidebar?.classList.remove("close");
  
    });
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  onLogout(){
    this.loginService.clearData();
    this.router.navigate(['']);
  }
}
