import { NgModule } from '@angular/core';
import { NavigationError, Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'pet',
    component: PetPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'location',
    component: LocationPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'friends',
    component: FriendsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'posts',
    component: PostsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'pets',
    component: PetsPageComponent,
    canActivate: [authGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.router.navigate(['/']); 
      }
    });
  }
 }
