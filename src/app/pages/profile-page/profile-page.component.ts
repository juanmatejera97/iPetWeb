import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  currentUser: User | undefined;
  constructor(
    private userService: UsersService,
    private messagesService: MessagesService
  ){  }

  ngOnInit(){
    this.getCurrentUserData();
  }

  getCurrentUserData(){
    this.userService.getCurrentUserData().subscribe({
      next: (data: User) => {
        this.currentUser = data;
      },
      error: (error: HttpErrorResponse) => {
        this.messagesService.showErrorOnSnackbar(error);
      },
    });
  }

}
