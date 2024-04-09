import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomePageComponent,
    HomePageComponent,
    ProfilePageComponent,
    PetPageComponent,
    LocationPageComponent,
    FriendsPageComponent,
    PostsPageComponent,
    PetsPageComponent,
    UsersPageComponent,
    RegisterPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
