import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RequestService} from '../../services/request.service';
import {UsersModel} from '../../models/posts.model';
import {DownloadService} from '../../services/download.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @HostBinding('class.user') componentClassName = true;
  id = 0;
  users: UsersModel[] = [];
  image = '';

  constructor(
    private router: ActivatedRoute,
    private requestService: RequestService,
    private downloadService: DownloadService
  ) {
  }

  ngOnInit(): void {
    this.users = this.requestService.usersList;
    this.router.params.subscribe((params: Params) => {
      this.id = +params.userId;
    });

    this.downloadService.exportImg().then(date =>  this.image = date);
  }

  downloadCsv(): void {
    this.downloadService.exportCsv(this.id);
  }

}
