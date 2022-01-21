import {Component, HostBinding, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';
import {UsersModel} from '../models/posts.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @HostBinding('class.users') componentClassName = true;
  usersName: UsersModel[] = [];

  constructor(private reqService: RequestService) {
  }

  ngOnInit(): void {
    this.usersName = this.reqService.usersList;
  }
}
