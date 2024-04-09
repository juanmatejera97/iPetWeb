import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private userService: UsersService,
  ){}

  ngOnInit(){
    this.getUsers()
  }

  private getUsers(){
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.userList = data;
        console.log("Correcto.", data)
      }, error: (e) => {
        console.log("ERROR: ", e)
      }
    });
  }
}
