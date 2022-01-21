import {Injectable} from '@angular/core';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import {RequestService} from './request.service';
import * as htmlToImage from 'html-to-image';
import {UsersModel} from '../models/posts.model';

@Injectable({providedIn: 'root'})

export class DownloadService {
  date: UsersModel[] = [];
  imageElement!: HTMLElement;
  image!: string;

  constructor(private requestService: RequestService) {
  }

  exportCsv(userId: number): void {
    console.log(this.requestService.usersList[userId]);
    this.date.push(this.requestService.usersList[userId]);

    // CSV Package Specification
    // tslint:disable-next-line:no-unused-expression
    new AngularCsv(this.date, 'Report');
  }

  exportImg(): Promise<string> {
    return htmlToImage.toPng(this.imageElement)
      .then(image => this.image = image);
  }
}
